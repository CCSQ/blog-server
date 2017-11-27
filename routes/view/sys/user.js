// 登陆模块

import express from 'express'
import md5 from 'js-md5'
import userService from '@/service/sys/user'
import menuService from '@/service/sys/menu'
import ResultUtils from '@/utils/ResultUtils'
import {returnCode,returnMsg} from '@/enum'
import jwt from 'jsonwebtoken'
var router = express.Router()

router.post('/login', (req, res, next) => {

	userService.getUserByNameAndPwd(req.body.userName, req.body.password).then((result) => {
		let user = result.data[0]

		let token = jwt.sign({name: user}, "Blog")

		menuService.getAllRoleMenuByUserId(user.id).then((menuResult) => {
			console.log(menuResult)
		})

		console.log(user.userName)
		console.log(user.status)
		console.log(user.name)
		console.log(user.id)


	}, (error) => {
		res.send(error)
	})
})

export default router