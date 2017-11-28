/**
	用户相关工具
*/



module.exports = {

	setCurrentUser: (req, user) => {
		req.session.user = user
	},

	getCurrentUser: (req, res) => {
		return res.redirect(req.session.user)
	},

}