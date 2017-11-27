import log4js from 'log4js'
import config from '@/conf/config'

// 增加自定义输出
log4js.addLayout('userLog', (config) => {
	return (logEvent) => {
		return '[' + logEvent.level.levelStr + '] [' + logEvent.startTime.getFullYear() + '-' + (logEvent.startTime.getMonth() + 1) + '-' + logEvent.startTime.getDate() + ' ' + logEvent.startTime.getHours() + ':' + logEvent.startTime.getMinutes() + ':' + logEvent.startTime.getSeconds() + '] [' + logEvent.data + ']' + config.separator
	}
})

log4js.addLayout('sqlLog', (config) => {
	return (logEvent) => {
		if (logEvent.level.levelStr === 'ERROR') console.log('[' + logEvent.level.levelStr + '] [' + logEvent.startTime.getFullYear() + '-' + (logEvent.startTime.getMonth() + 1) + '-' + logEvent.startTime.getDate() + ' ' + logEvent.startTime.getHours() + ':' + logEvent.startTime.getMinutes() + ':' + logEvent.startTime.getSeconds() + '] [' + logEvent.data + ']' + config.separator)
		return '[' + logEvent.level.levelStr + '] [' + logEvent.startTime.getFullYear() + '-' + (logEvent.startTime.getMonth() + 1) + '-' + logEvent.startTime.getDate() + ' ' + logEvent.startTime.getHours() + ':' + logEvent.startTime.getMinutes() + ':' + logEvent.startTime.getSeconds() + '] [' + logEvent.data + ']' + config.separator
	}
})

log4js.addLayout('sysLog', (config) => {
	return (logEvent) => {
		if (logEvent.level.levelStr === 'ERROR') console.log('[' + logEvent.level.levelStr + '] [' + logEvent.startTime.getFullYear() + '-' + (logEvent.startTime.getMonth() + 1) + '-' + logEvent.startTime.getDate() + ' ' + logEvent.startTime.getHours() + ':' + logEvent.startTime.getMinutes() + ':' + logEvent.startTime.getSeconds() + '] [' + logEvent.data + ']' + config.separator)
		return '[' + logEvent.level.levelStr + '] [' + logEvent.startTime.getFullYear() + '-' + (logEvent.startTime.getMonth() + 1) + '-' + logEvent.startTime.getDate() + ' ' + logEvent.startTime.getHours() + ':' + logEvent.startTime.getMinutes() + ':' + logEvent.startTime.getSeconds() + '] [' + logEvent.data + ']' + config.separator
	}
})

log4js.configure(config.log4j)

let log = log4js.getLogger()
log.level = 'INFO'

let sqlLog = log4js.getLogger('sql')
sqlLog.level = 'INFO'

let sysLog = log4js.getLogger('sys')
sysLog.level = 'INFO'

export const logInit = (app) => {
	app.use(log4js.connectLogger(log, { level: log4js.levels.INFO }))
}

export const logger = log
export const sqlLogger = sqlLog
export const sysLogger = sysLog

// module.exports = (app) => {
// 	app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }))
// }

// var logger = require('morgan') // 日志中间件

// var fs = require('fs')
// var path = require('path')

// var fileStreamRotator = require('file-stream-rotator') // 日志切割

// var logDir = path.join(__dirname, 'logs')
// fs.existsSync(logDir) || fs.mkdirSync(logDir)

// // 自定义token
// logger.token('time', (req, res) => {
// 	let date = new Date(Date.now())
// 	return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
// })

// logger.token('query', (req, res) => {
// 	return JSON.stringify(req.query) || 'none'
// })

// logger.token('ip', (req, res) => {
// 	return req.ip || 'none'
// })

// // 自定义format，其中包含自定义的token
// logger.format('dev', '[dev] [:time] [:method] [:url] [:status] [:query] [:ip]')

// // 记录日志
// var devLogStream = fileStreamRotator.getStream({
// 	date_format: 'YYYYMMDD',
// 	filename: path.join(logDir, 'dev-%DATE%.log'),
// 	frequency: 'daily',
// 	verbose: false,
// })

// module.exports = (app) => {
// 	app.use(logger('dev', {
// 		stream: devLogStream, // 日志的输出流配置，默认是process.stdout。
// 	}))
// }