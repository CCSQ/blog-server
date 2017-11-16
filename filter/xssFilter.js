// xss 过滤器
import xss from 'xss'

module.exports = function (app) {
	app.all('*', function(req, res, next) {
		let json = xss(JSON.stringify(req.query))
		req.query = JSON.parse(json)

		let jsonBody = xss(JSON.stringify(req.body))
		req.body = JSON.parse(jsonBody)
		
		next()
	})
}
