// var server = require("./server");
// 	server.start();



var server = require("./server"),
	router = require("./router");
server.start(router.route);