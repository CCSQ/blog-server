
var userDao = require('@/models/sys/user')

module.exports = {
	getCountByCondition: (map) => {
		return userDao.getCountByCondition(map)
	},

	getUserByNameAndPwd: (name = '', password = '') => {
		return userDao.getUserByNameAndPwd(name, password)
	},
}