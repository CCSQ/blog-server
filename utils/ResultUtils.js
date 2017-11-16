import {Result} from '@/bean/framwork'
import ObjectUtils from '@/utils/ObjectUtils'
import StringUtils from '@/utils/StringUtils'
import {returnCode,returnMsg} from '@/enum'

// 将字段转换成驼峰
function changAllItemUpperCase(item) {
	let newMap = {}
	for (let key in item) {
		let keyArr = key.split('_')
		let newKey = keyArr[0]
		if (keyArr[1]) 
			for (let i = 1; i < keyArr.length; i++) {
				newKey += StringUtils.firstUpperCase(keyArr[i])
			}
		newMap[newKey] = item[key]
	}

	return newMap
}


module.exports = {
	returnSuccessResult: (meg = returnMsg.success, data = [], pb) => {
		let returnData
		if (ObjectUtils.isArray(data)) {
			returnData = []
			data.forEach((item) => {
				returnData.push(changAllItemUpperCase(item))
			})
		} else if (ObjectUtils.isNum(data)) {
			returnData = data
		} else {
			returnData = changAllItemUpperCase(data)
		}
		return new Result(true, returnCode.success, meg, returnData, pb)
	},

	returnErrorResult: (meg = returnMsg.error, data = []) => {
		return new Result(false, returnCode.error, meg, data)
	},

	returnPermissionsErrorResult: (meg = returnMsg.noPermissions, data = []) => {
		return new Result(false, returnCode.noPermissions, meg, data)
	},

	returnResult: (meg = returnMsg.success, data = [], code = returnCode.success) => {
		return new Result(true, code, meg, data)
	},

}