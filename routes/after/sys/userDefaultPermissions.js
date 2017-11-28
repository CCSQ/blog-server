/**
	登陆用户默认权限：登陆后即可拥有该权限
*/

import express from 'express'
let router = express.Router()

import menuService from '@/service/sys/menu'
import StringUtils from '@/utils/StringUtils'

/**
	获取用户菜单资源
*/
router.get('/getAllRoleMenu', (req, res, next) => {
	let userId = 1
	menuService.getAllRoleMenuByUserId(userId).then((result) => {
		res.send(result)
	})
})



export default router