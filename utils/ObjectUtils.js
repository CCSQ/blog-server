

module.exports = {
	isArray: (object) => {
		return object instanceof Array
	},

	isNum: (object) => {
		return typeof object === "number"
	},

}