import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'
// import cors from 'cors'


import { logInit, logger } from '@/conf/log'
import config from '@/conf/config'

const app = express()

// 跨域
// app.use(cors({
// 	origin: config.origin,
// 	methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
// 	allowHeaders: ['Content-Type', 'Authorization'],
// }))

// 设置post参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}))

// 定义cookie解析器
app.use(cookieParser())
app.use(session({
	secret: 'blog',	// 加密session字符
	name: 'SESSION_ID',	// cookie名字
	cookie: {maxAge: 60000},	// cookie过期时间
	resave: false,	// 是指每次请求都重新设置session cookie，假设你的cookie是6000毫秒过期，每次请求都会再设置6000毫秒。
	saveUninitialized: true,	// 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
}))

// favicon设置
app.use(favicon(path.join(__dirname, 'public', 'ico', 'favicon.ico')))

// 设定静态文件目录
app.use(config.staticSources.view, express.static(path.join(__dirname, 'public')))

// 过滤器中间件
require('./filter')(app)

// 加载路由
require('./routes')(app)

// 加载log配置
logInit(app)

// 设定views变量，意为视图存放的目录
// app.set('views', path.join(__dirname, 'views'))

// 设定view engine变量，意为网页模板引擎
// app.set('view engine', 'jade')

if (config.port) {
	process.env.PORT = config.port
	logger.info(`================ 项目启动 [${process.env.PORT}] ================`)
}









// catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found')
	err.status = 404
	next(err)
})

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app