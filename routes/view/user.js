// 登陆模块

import express from 'express'
import md5 from 'js-md5'
import userService from '@/service/user'
import ResultUtils from '@/utils/ResultUtils'
import {returnCode,returnMsg} from '@/enum'
import jwt from 'jsonwebtoken'
var router = express.Router()

router.post('/login', (req, res, next) => {
	let map = {}
	map.userName = req.body.userName
	map.password = req.body.password
	userService.getCountByCondition(map).then((result) => {
		if (result.success){
			if (result.data > 0) {
				// 成功
				let token = jwt.sign({name: map.userName}, "Blog")
				res.send(ResultUtils.returnResult('登陆成功', {
					token: token
				}, returnCode.loginSuccess))
			}
		}

		res.send(ResultUtils.returnResult('登陆失败'))
	})
})

export default router