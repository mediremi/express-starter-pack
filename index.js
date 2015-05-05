var alloc = require("tcp-bind")
var config = require("./config")
var app = require("./app")

var fd = alloc(config.port)

// process.setuid(process.argv[2])
// process.setgid(process.argv[3])

app.listen({ fd: fd }, function() {
	console.log("Listening on:", config.port)
})
