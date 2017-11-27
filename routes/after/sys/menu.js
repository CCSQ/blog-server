var express = require('express')
var router = express.Router()

var menuService = require('@/service/sys/menu')
var StringUtils = require('@/utils/StringUtils')

/**
	通过用户类型获取所有菜单列表
*/
router.get('/getAllRoleMenu', (req, res, next) => {
	let userId = 1
	menuService.getAllRoleMenuByUserId(userId).then((result) => {
		res.send(result)
	})
})

/**
	获取列表
*/
router.get('/list', (req, res, next) => {
	let map = {}, pb

	if (req.query.fatherId) map.fatherId = req.query.fatherId

	if (req.query.pageIndex)
		pb = {
			pageIndex: req.query.pageIndex,
			pageSize: req.query.pageSize,
		}

	menuService.findByCondition(map, pb).then((result) => {
		res.send(result)
	})
})

/**
	批量删除
*/
router.delete('/deletes', (req, res, next) => {
	let ids = req.query.ids.split(',')
	menuService.deletes(ids).then((result) => {
		res.send(result)
	})
})

/**
	获取单条记录
*/
router.get('/get', (req, res, next) => {
	let id = req.query.id

	menuService.get(id).then((result) => {
		res.send(result)
	})
})

/**
	保存
*/
router.put('/save', (req, res, next) => {
	// TODO 验证
	menuService.save(req.body).then((result) => {
		res.send(result)
	})
})

export default router