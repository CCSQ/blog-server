var {returnCode,returnMsg} = require('@/enum')

// result，返回结果
export const Result = function (
	success = '',
	code = '',
	msg = '',
	data = [],
	pb = {
		pageIndex: 0,
		pageSize: 0,
		pageLimit: 0,
	},
) {
	this.success = success
	this.code = code
	this.msg = msg
	this.data = data
	this.pb = pb
}

Result.prototype = {
	isSuccess: () => {
		return this.success
	},
}
