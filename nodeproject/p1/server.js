
/* 
  *24/3/2016 at 10.28 AM
  * HTTP server
 */
//Hello
/*
 var http = require( "http" );
    http.createServer( function( request, response) {
        response.writeHead( 200, { 
            "Content-Type" : "text/plain"
        });
        response.write("Hello World ");
        response.end();
    }).listen(8000);
    
    */
   
/*var http = require("http");
var server = http.createServer();
server.listen(8888);*/



/*
 *27/03/2016 
 * How function passing makes our HTTP server work
 
 **/

/*var http = require( "http" );
http.createServer( function( request, response ) {
    response.writeHead( 
            200, 
            {   
                "Content-Type" : "text/plain"
            }
    );
    response.write("Hello wakidur! how are you? is you first node conncection");
    response.end();
} ).listen(8808);
*/

//we could achieve the same by refactoring our code 

/*var http = require( 'http' );
function onRequest( request, response ) {
    response.writeHead(
            200,
           {   
                "Content-type" : "text/plain"
            }
        );
    response.write("Hellow world");
    response.end();
}
http.createServer( onRequest ).listen(8888);
*/
//Event-driven asynchronous callbacks
/*
 * var result = databasw.query( "SELECT * FORM hugetable" );
console.log( "hello World" );
 */















/*
 *28/03/2016 
 * How function passing makes our HTTP server work
 
 **/

/*var http = require( "http" );
 function onRequest( require, response) {
 	console.log( "Request receved.");
 	response.writeHead( 200, { "Content-Type " : "text/plain"});
 	response.write("Hello world");
 	response.end();
 }
 http.createServer(onRequest).listen(8888);
 console.log( "Server has started ");
*/


/*var http = require( "http" );
function start() {
    function onRequest(require, response) {
        console.log("Request received");
        response.writeHead(
                200,
                {"Content-Type": "text/plain"}
        );
        response.write("Hello world in Bangladesh");
        response.end();
    }
    http.createServer(onRequest).listen(8800);
    console.log("Server has started.");
}
exports.start = start;
*/

// What’s needed to ”route” requests?

 /*var http = require("http");
 var url = require("url");
 function start() {
 	function onRequest( request, response ) {
            var pathname = url.parse( request.url).pathname;
            console.log("Request for" + pathname+ "received.");
            response.writeHead(200, {"Content-Type" : "text/plain"});
            response.write("hello");
            response.end();
 	}
 	http.createServer(onRequest).listen(8000);
 	console.log("Server has started");

 }
 exports.start = start;
*/

// main script 

/*
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

*/
/*
 * 29/03/2016
 */
//Execution in the kingdom of verbs

/*
 * 29/03/2016
 */

/*
var http = require("http"),
    url  = require("url");
function start( route, handle ) {
    function onRequest( request, response ) {
        var pathname = url.parse( request.url ).pathname;
        console.log( "Request for " + pathname + "recevived." );
        route( handle, pathname);
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("hello");
        response.end();
    }
    http.createServer(onRequest).listen(8000);
    console.log("server has started");
}
exports.start = start;
*/
/*
 * 31/03/2016
 */
//Making the request handlers respond



var http = require("http");
var url = require("url");
function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname,
            content = route(handle, pathname);
        console.log("Request for " + pathname + " received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
module.exports.start = start;


/*
 * 31/03/2016
 * Responding request handlers with non-blocking operations;
 */




















