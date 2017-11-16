// 加载路由部分，使用文件名字进行路由命名

const afterFiles = require.context('./after', false, /\.js$/)

const viewFiles = require.context('./view', false, /\.js$/)

module.exports = function (app) {
	afterFiles.keys().forEach((key) => {
		if (key === './index.js') return
		app.use('/after' + key.replace(/(\.js|\.)/g, ''), afterFiles(key).default)
	})

	viewFiles.keys().forEach((key) => {
		if (key === './index.js') return
		app.use('/view' + key.replace(/(\.js|\.)/g, ''), viewFiles(key).default)
	})
}
