// token 过滤器
import jwt from 'jsonwebtoken'
import expressJWT from 'express-jwt'
import ResultUtils from '@/utils/ResultUtils'
import config from '@/conf/config'

module.exports = function (app) {
	app.all('*', function(req, res, next) {
		if (req.url.indexOf(config.staticSources) === 0 || req.url.indexOf('/view') === 0) {
			next()
		} else {
			if (req.headers.token) {
				jwt.verify(req.headers.token, 'Blog', function (err, decoded) {
					if (!err && decoded) {
						next()
					} else {
						res.status(401).send(ResultUtils.returnPermissionsErrorResult())
					}
				})
				
			} else {
				res.status(401).send(ResultUtils.returnPermissionsErrorResult())
			}
		}
	})
}
