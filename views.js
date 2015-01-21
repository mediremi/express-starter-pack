var nunjucks = require("nunjucks")

module.exports = function(app) {
	nunjucks.configure("views", {
		autoescape: true,
		express: app
	})
}
