import mysql from 'mysql'
import StringUtils from '@/utils/StringUtils'
import ResultUtils from '@/utils/ResultUtils'

import poolModule from 'generic-pool'	// 引入连接池

import config from '@/conf/config'
import { logger, sqlLogger } from '@/conf/log'

// 使用数据库连接池
let pool

(() => {
	if (!pool)
		pool  = mysql.createPool({
			host: config.sqlHost,
			user: config.sqlUser,
			password: config.sqlPassword,
			database: config.sqlDatabase,
			connectionLimit: config.connectionLimit,
		})
	if (pool) logger.info('数据库连接池建立成功')
})()

// 条件组装
const assemblyCondition = (
	conditon = [],
	conditonType = 'and'
) => {
	// 条件
	let conditonArray = []
	conditon.forEach((item) => {
		// in 语句
		if (item.type === 'in') return conditonArray.push(`${item.param} ${item.type} (${mysql.escape(item.value)})`)

		// 带value和不带value
		if (item.value) conditonArray.push(`${item.param} ${item.type} ${mysql.escape(item.value)}`)
		else conditonArray.push(`${item.param} ${item.type}`)
	})
	return conditonArray.join(` ${conditonType} `)
}

/**
	通用查询方法(分页查询)
*/
const select = ({
	param = [],			// 字段
	tableName = '',		// 表名
	conditon = [],		// 条件{ param：字段名，value：值，type：运算类型 }
	order = [],			// 排序
	group = [],			// 分组
}, pb = {				// 分页
	pageIndex: 0,
	pageSize: 0,
}) => {
	let orderString = order.join(','),
	groupString = group.join(',')

	// 条件
	let conditonString = assemblyCondition(conditon)

	let sql = `select ${param.join(',')} from ${tableName}`
	if (StringUtils.isNotBlank(conditonString)) sql += ` where ${conditonString}`
	if (StringUtils.isNotBlank(groupString)) sql += ` group by ${groupString}`
	if (StringUtils.isNotBlank(orderString)) sql += ` order by ${orderString}`

	if (pb.pageSize != 0) sql += ` LIMIT ${((pb.pageIndex - 1) * pb.pageSize)},${pb.pageSize}`

	sqlLogger.info(`commit select sql : "${sql}"`)

	return new Promise((resolve, reject) => {
		pool.getConnection((poolErr, connection) => {
			connection.query(sql, (err,results,fields) => {
				connection.release()
				if (err) {
					sqlLogger.error(`commit select sql err : "${sql}" ; infor: ${err}`)
					return resolve(ResultUtils.returnErrorResult('查询失败！'))
				}

				// 获取记录数量(存在分页时处理)
				if (pb.pageSize != 0) {
					getCountByCondition({
						tableName: tableName,
						conditon: conditon
					}).then((result) => {
						if (result.success) pb.pageLimit = Math.ceil(result.data / pb.pageSize)

						resolve(ResultUtils.returnSuccessResult(undefined, results, pb))
					})
				} else {
					resolve(ResultUtils.returnSuccessResult(undefined, results))
				}
			})
		})
	})
}

/**
	获取记录数量
*/
const getCountByCondition = ({
	tableName = "",		// 表名
	conditon = [],
}) => {
	let sql = `select count(1) from ${tableName}`
	let conditonString = assemblyCondition(conditon)
	if (StringUtils.isNotBlank(conditonString)) sql += ` where ${conditonString}`

	sqlLogger.info(`commit getCountByCondition sql : "${sql}"`)

	return new Promise((resolve, reject) => {
		pool.getConnection((poolErr, connection) => {
			connection.query(sql, (err,results,fields) => {
				connection.release()
				if (err) {
					sqlLogger.error(`commit getCountByCondition sql err : "${sql}" ; infor: ${err}`)
					return resolve(ResultUtils.returnErrorResult('查询失败！'))
				}

				resolve(ResultUtils.returnSuccessResult(undefined, results[0]['count(1)']))
			})
		})
	})
}

/**
	获取单条记录
*/
const get = ({
	param = [],			// 字段
	tableName = "",		// 表名
	id = 0,
}) => {
	let sql = `select ${param.join(',')} from ${tableName} where id = ${mysql.escape(id)}`

	sqlLogger.info(`commit get sql : "${sql}"`)

	return new Promise((resolve, reject) => {
		pool.getConnection((poolErr, connection) => {
			connection.query(sql, (err,results,fields) => {
				connection.release()
				if (err) {
					sqlLogger.error(`commit get sql err : "${sql}" ; infor: ${err}`)
					return resolve(ResultUtils.returnErrorResult('查询失败！'))
				}

				resolve(ResultUtils.returnSuccessResult(undefined, results[0]))
			})
		})
	})
}

/**
	按ID批量删除
*/
const deletes = ({
	tableName = "",
	ids = [],
}) => {
	return new Promise((resolve, reject) => {
		if (ids.length < 1) return resolve(ResultUtils.returnErrorResult('ID至少要存在一个！'))

		let sql = `delete from ${tableName} where id in (${mysql.escape(ids.join(','))})`

			sqlLogger.info(`commit deletes sql : "${sql}"`)

			pool.getConnection((poolErr, connection) => {
				connection.query(sql, (err,results,fields) => {
					connection.release()
					if (err) {
						sqlLogger.error(`commit deletes sql err : "${sql}" ; infor: ${err}`)
						return resolve(ResultUtils.returnErrorResult('删除失败！'))
					}

					resolve(ResultUtils.returnSuccessResult('删除成功！'))
				})
			})
	})
}

/**
	保存 / 更新
*/
const save = ({
	tableName = "",
	param = {},
}) => {
	delete param.insert_time
	delete param.update_time

	// 更新
	if (param.id) {

		return new Promise((resolve, reject) => {})
	// 新建
	} else {
		let keyArr = []
		let valueArr = []
		for (let key in param) {
			keyArr.push(key)
			valueArr.push(mysql.escape(param[key]))
		}
		keyArr.push('insert_time')
		valueArr.push('NOW()')
		keyArr.push('update_time')
		valueArr.push('NOW()')
		if (keyArr.length < 1) return resolve(ResultUtils.returnErrorResult('至少要保存一个字段！'))

		let sql = `insert into ${tableName} (${keyArr.join(',')}) values (${valueArr.join(',')})`

		sqlLogger.info(`commit save sql : "${sql}"`)

		return new Promise((resolve, reject) => {
			pool.getConnection((poolErr, connection) => {
				connection.query(sql, (err,results,fields) => {
					connection.release()
					if (err) {
						sqlLogger.error(`commit save sql err : "${sql}" ; infor: ${err}`)
						return resolve(ResultUtils.returnErrorResult('添加失败！'))
					}

					resolve(ResultUtils.returnSuccessResult('添加成功！'))
				})
			})
		})
	}
}

/**
	执行查询SQL
*/
const commitSelectSQL = (sql = '', param = []) => {
	sql = mysql.format(sql, param)

	sqlLogger.info(`commit commitSelectSQL sql : "${sql}"`)

	return new Promise((resolve, reject) => {
		pool.getConnection((poolErr, connection) => {
			connection.query(sql, (err,results,fields) => {
				connection.release()
				if (err) {
					sqlLogger.error(`commit commitSelectSQL sql err : "${sql}" ; infor: ${err}`)
					return resolve(ResultUtils.returnErrorResult('查询失败！'))
				}

				resolve(ResultUtils.returnSuccessResult(undefined, results))
			})
		})
	})
}

/**
	执行删除SQL
*/
const commitDeleteSQL = ({
	tableName = "",
	conditon = [],
	conditonType = 'and',
}) => {
	let sql = `delete from ${tableName}`

	let conditonString = assemblyCondition(conditon, conditonType)

	if (StringUtils.isNotBlank(conditonString)) sql += ` where ${conditonString}`

	sqlLogger.info(`commit commitDeleteSQL sql : "${sql}"`)

	return new Promise((resolve, reject) => {
		pool.getConnection((poolErr, connection) => {
			connection.query(sql, (err,results,fields) => {
				connection.release()
				if (err) {
					sqlLogger.error(`commit commitDeleteSQL sql err : "${sql}" ; infor: ${err}`)
					resolve(ResultUtils.returnErrorResult('删除失败！'))
				} else {
					resolve(ResultUtils.returnSuccessResult('删除成功！'))
				}
			})
		})
	})
}

/**
	删除操作（多表）
*/
// const deletes = (param = []) => {
// 	return new Promise((resolve, reject) => {
// 		if (param.length < 1) {
// 			return resolve(ResultUtils.returnErrorResult('无删除动作！'))
// 		}
// 		pool.getConnection((poolErr, connection) => {
// 			connection.beginTransaction((err) => {
// 				if (err) {
// 					// TODO LOG
// 					return resolve(ResultUtils.returnErrorResult('系统错误！'))
// 				}
// 				let sql = ''
// 				for (let i = 0; i < param.length; i++) {
// 					sql += 'delete from ' + param[i].tableName
// 					let conditonString = assemblyCondition(param[i].conditon)
// 					if (StringUtils.isNotBlank(conditonString)) sql += ' where ' + conditonString
// 					sql += ';'
// 				}

// 				connection.query(sql, (error,results,fields) => {
// 					if (error) {
// 						return connection.rollback(() => {
// 							console.log("执行失败(回滚事物)：" + sql)
// 							return resolve(ResultUtils.returnErrorResult('执行删除失败！'))
// 						})
// 					}

// 					connection.commit((cerr) => {
// 						if (cerr) {
// 							return connection.rollback(() => {
// 								console.log("事物提交失败！")
// 								return resolve(ResultUtils.returnErrorResult('执行删除失败！'))
// 							})
// 						}
// 						resolve(ResultUtils.returnSuccessResult(undefined))
// 					})
// 				})

// 			})
// 		})
// 	})
// }

module.exports = {
	get: get,
	save: save,
	select: select,
	deletes: deletes,
	getCountByCondition: getCountByCondition,
	commitSelectSQL: commitSelectSQL,
	commitDeleteSQL: commitDeleteSQL,
}