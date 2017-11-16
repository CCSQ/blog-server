
var dbConnect = require('@/conf/dbConnect')

let tableName = 't_user_user'

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


}