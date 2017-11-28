// 登陆模块

import express from 'express'
import md5 from 'js-md5'
import userService from '@/service/sys/user'
import menuService from '@/service/sys/menu'
import ResultUtils from '@/utils/ResultUtils'
import UserUtils from '@/utils/UserUtils'
import {returnCode,returnMsg} from '@/enum'
import jwt from 'jsonwebtoken'
var router = express.Router()

router.post('/login', (req, res, next) => {

	userService.getUserByNameAndPwd(req.body.userName, req.body.password).then((result) => {
		let user = result.data[0]

		let token = jwt.sign({name: user}, "Blog")

		UserUtils.setCurrentUser(req, user)
		// UserUtils.getCurrentUser(req, res)
		menuService.getAllRoleMenuByUserId(user.id).then((menuResult) => {
			if (menuResult.success) {
				res.send(ResultUtils.returnSuccessResult("登陆成功", {
					user: user,
					token: token,
					menu: menuResult.data,
				}))
			}
		}, (menuError) => {
			res.send(menuError)
		})
	}, (error) => {
		res.send(error)
	})
})

export default router