/*
 *  28/03/2016
 */
/*
function route ( pathname ) {
	// body...
	console.log( "About route a request for " + pathname );
}
exports.route = route;

*/

/*
 * 29/03/2016
 */



/*
 * 30/03/2016
 */
/*
function route( handle, pathname ){
    console.log("About to route a request for " + pathname );
    if( typeof handle[pathname] === "function" ){
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname );
    }
    
}
exports.route = route;

*/

/*
 * 31/03/2016
 */

/*
function route(handle, pathname) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
        return "404 Not found";
    }
}
module.exports.route = route;

*/


/*
 * 03/04/2016
 */
/*
function route( handle, pathname, response ) {
    console.log( "About to route a request for" + pathname );
    if( typeof handle[pathname] === "function" ){
        handle[pathname](response);
    } else {
        console.log( "No request handler found for " + pathname );
        response.writeHand( 404, {"Conten-Type" : "text/plain"});
        response.write("404 Not forunt");
        response.end();
    }
}
module.exports.route = route();
*/
/**
 * 04/04/2016
 */
function route(handle, pathname, response, postData) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;