var test = require("tape")
var request = require("supertest")
var config = require("../config")
var app = require("../app")

test("Server is listening on port " + config.port, function(t) {
	t.plan(1)

	request(app)
		.get("/")
		.expect("Content-Type", /text\/html/)
		.expect(200)
		.end(function(err, res) {
			if (err) {
				throw err
			}

			t.ok(res)
		})
})
