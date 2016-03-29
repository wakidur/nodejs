// var http = require( "http" );
// function onRequest( require, response) {
// 	console.log( "Request receved.");
// 	response.writeHead( 200, { "Content-Type " : "text/plain"});
// 	response.write("Hello world");
// 	response.end();
// }
// http.createServer(onRequest).listen(8888);
// console.log( "Server has started ");



var http = require( "http" );
function start() {
	function onRequest( require ,response  ) {
		console.log("Request received");
		response.writeHead( 
			200, 
			{ "Content-Type" :"text/plain"}
		);
		response.write("Hello world in Bangladesh");
		response.end();
	}
	http.createServer( onRequest ).listen(8800);
	console.log( "Server has started.");
}
exports.start = start;


// What’s needed to ”route” requests?

// var http = require("http");
// var url = require("url");
// function start() {
// 	function onRequest( request, response ) {
// 		var pathname = url.parse( request.url).pathname;
// 		console.log("Request for" + pathname+ "received.");
// 		response.writeHead(200, {"Content-Type" : "text/plain"});
// 		response.write("hello");
// 		response.end();
// 	}
// 	http.createServer(onRequest).listen(8000);
// 	console.log("Server has started");

// }
// exports.start = start;


// main script 

var http = require("http"), 
	url = require("url");
function start( route ) {
	function onRequest ( request, response ) {
		var pathname = url.parse( request.url ).pathname;
		console.log( "Request for "  +pathname+ "received");
		route( pathname);
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write("hello");
		response.end();
	}
	http.createServer(onRequest).listen(8000);
	console.log("Server has started");
}
exports.start = start;