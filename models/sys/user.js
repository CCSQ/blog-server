
import dbConnect from '@/conf/dbConnect'
import ResultUtils from '@/utils/ResultUtils'

import { logger } from '@/conf/log'

let tableName = 't_sys_user'

module.exports = {
	// 获取记录数量
	getCountByCondition: (map) => {
		let conditon = []

		conditon.push({ param: 'user_name', value: map.userName, type: '=' })
		conditon.push({ param: 'password', value: map.password, type: '=' })

		return dbConnect.getCountByCondition({
			tableName: tableName,
			conditon: conditon,
		})
	},

	// 通过用户名和密码获取用户
	getUserByNameAndPwd: (name = '', password = '') => {
		// TODO 用户状态过滤
		let sql = `
			SELECT
				t.id,
				t. NAME,
				t. STATUS,
				t.user_name
			FROM
				t_sys_user t
			WHERE
				t.user_name = ?
			AND t. PASSWORD = ?`
			
		return new Promise((resolve, reject) => {
			dbConnect.commitSelectSQL(sql, [name, password]).then((result) => {
				if (result.data.length !== 1) {
					if (result.data.length > 1) {
						logger.error(`获取用户失败，数据库中存在两条及以上相同数据 用户："${name}"`)
					}
					return reject(ResultUtils.returnErrorResult('查询失败！'))
				} else {
					return resolve(result)
				}
			}, (error) => {
				return reject(error)
			})
		})
	},
}