
var dbConnect = require('@/conf/dbConnect')

const param = ['*'],
	tableName = 't_sys_menu',
	paramToKey = {
		id: 			'id',
		icon: 			'icon',
		name: 			'name',
		url: 			'url',
		component: 		'component',
		fatherId: 		'father_id',
		orderNumber: 	'order_number',
		insertTime: 	'insert_time',
		updateTime: 	'update_time',
	}

module.exports = {
	// 按条件查找，map，参数，pb分页
	findByCondition: (map, pb) => {
			let conditon = [],
			order = ['order_number']
			// group = []

		if (map.fatherId) conditon.push({ param: 'father_id', value: map.fatherId, type: '=' })
		else conditon.push({ param: 'father_id', value: '0', type: '=' })


		return dbConnect.select({
			param: param,
			tableName: tableName,
			conditon: conditon,
			order: order,
			// group: group,
		}, pb)
	},

	get: (id) => {
		return dbConnect.get({
			param: param,
			tableName: tableName,
			id: id,
		})
	},

	/**
		批量删除
	*/
	deletes: (ids) => {
		return dbConnect.commitDeleteSQL({
			tableName: tableName,
			conditon: [
				{ param: 'father_id', value: ids.join(','), type: 'in' },
				{ param: 'id', value: ids.join(','), type: 'in' },
			],
			conditonType: 'or'
		})
	},

	save: (menu) => {
		let param = {}
		for (let key in menu) {
			if (paramToKey[key]) param[paramToKey[key]] = menu[key]
		}

		return dbConnect.save({
			tableName: tableName,
			param: param,
		})
	},

	getAllRoleMenuByUserId: (userId) => {
		let sql = `
			SELECT * FROM t_sys_menu WHERE id in (
				SELECT menu_id FROM t_relation_role_menu WHERE role_id in (
					SELECT role_id from t_relation_user_role WHERE user_id = ?
				)
			) order by father_id, order_number desc
		`

		return dbConnect.commitSelectSQL(sql, [userId])

	},


}