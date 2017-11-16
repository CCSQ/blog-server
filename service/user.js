
var userDao = require('@/models/user')

module.exports = {
	getCountByCondition: (map) => {
		return userDao.getCountByCondition(map)
	},
}