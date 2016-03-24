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
