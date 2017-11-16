const webpack = require('webpack')

const path = require('path')
const fs = require('fs')

// 不处理的模块
var nodeModules = {}
fs.readdirSync('node_modules').filter(function(x) {
	return ['.bin'].indexOf(x) === -1
}).forEach(function(mod) {
	nodeModules[mod] = 'commonjs ' + mod
})

module.exports = {
	// 入口
	entry: [
		'webpack/hot/poll?1000',
		'./bin/www',
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},

	module: {
		// module.rules 是和版本1.x中的 module.loaders 是相同的
		rules: [
			// 识别出(identify)应该被对应的 loader 进行转换(transform)的那些文件。(test 属性)
			// 转换这些文件，从而使其能够被添加到依赖图中（并且最终添加到 bundle 中）(use 属性)

			// 转换es6语法
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [
					path.resolve(__dirname, "node_modules"),
				],
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0'], // 对 es6 es7 语法进行转换
				},
			},

			{
				test: /\.json$/,
				loader: 'json-loader',
			},
		]
	},

	// webpack在构建包的时候会按目录的进行文件的查找，resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀，只要require('common')就可以加载common.js文件了
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': path.resolve(__dirname, '.'),
		},
	},

	// 插件
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	// 使用 node webpack 会编译为用于「类 Node.js」环境（使用 Node.js 的 require ，而不是使用任意内置模块（如 fs 或 path）来加载 chunk）。
	// 构建目标
	target: 'node',	// 打包的对象是 node 端的代码，这样一些原生模块webpack 就不会做处理

	externals: nodeModules,	// 不处理的模块

	// __dirname __filename 被webpack 转换为 / 加入以下配置去除
	context: __dirname,
	node: {
		__filename: false,
		__dirname: false,
	},
}