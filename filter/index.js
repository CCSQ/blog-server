// 过滤器部分 (有可能存在顺序问题，故通过手动引入，不做自动处理)

module.exports = function (app) {
	require('./xssFilter')(app)
	require('./token')(app)
}
