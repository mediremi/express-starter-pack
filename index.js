var config = require("./config")
var app = require("./app")

app.listen(config.port, function() {
	console.log("Listening on:", config.port)
})
