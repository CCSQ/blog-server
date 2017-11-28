
var menuDao = require('@/models/sys/menu')

module.exports = {
	findByCondition: (map, pb) => {
		// return new Promise((resolve, reject) => {
		// 	menuDao.findByCondition(map, pb).then((result) => {
		// 		if (result.success) {
		// 			let newResultMap = {}
		// 			result.data.forEach((item) => {
		// 				if (!item.fatherId) {
		// 					newResultMap[item.id] = item
		// 					newResultMap[item.id].child = []
		// 				} else {
		// 					newResultMap[item.fatherId].child.push(item)
		// 				}
		// 			})
		// 			let newResultList = []
		// 			for (let key in newResultMap) {
		// 				newResultList.push(newResultMap[key])
		// 			}
		// 			result.data = newResultList
		// 		}
		// 		resolve(result)
		// 	})
		// })
		return menuDao.findByCondition(map, pb)
	},

	deletes: (ids) => {
		return menuDao.deletes(ids)
	},

	get: (id) => {
		return menuDao.get(id)
	},

	save: (menu) => {
		return menuDao.save(menu)
	},

	getAllRoleMenuByUserId: (userId) => {
		return new Promise((resolve, reject) => {
			menuDao.getAllRoleMenuByUserId(userId).then((result) => {
				if (result.success) {
					let newResultMap = {}
					result.data.forEach((item) => {
						if (!item.fatherId) {
							newResultMap[item.id] = item
							newResultMap[item.id].child = []
						} else {
							newResultMap[item.fatherId].child.push(item)
						}
					})
					let newResultList = []
					for (let key in newResultMap) {
						newResultList.push(newResultMap[key])
					}
					result.data = newResultList
				}
				resolve(result)
			}, (error) => {
				reject(error)
			})
		})
	},

}