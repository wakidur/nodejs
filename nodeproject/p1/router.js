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

function route( handle, pathname ){
    console.log("About to route a request for " + pathname );
    if( typeof handle[pathname] === "function" ){
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname );
    }
    
}
exports.route = route;