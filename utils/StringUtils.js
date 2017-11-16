

module.exports = {
	isNotBlank: (string) => {
		if (!string) return false
		if (string.length === 0) return false
		if (string === '') return false
		if (string === "''") return false

		return true
	},

	firstUpperCase: (string) => {
		return string.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
	},

}