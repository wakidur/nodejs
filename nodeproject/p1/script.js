
/* 
 * 24/3/2016 
 * 
 */
/*
function say (word ) {
    console.log(word);
}

function execute( someFunction, value ) {
    someFunction( value );
}
execute(say ,"Hello");


function execute( someFunction , value ){
    someFunction(value);
}
execute( function(word) {console.log(word), "hello"})
*/



/*
 * 28/03/2016
 * 
 */

/* var server = require("./server");
 	server.start();

*/




 /*   var server = require("./server"),
        router = require("./router");
        server.start(router.route);*/


/*
 * 29/03/2016
 */

//$route['job-detail/:any'] = 'frontend/jobDetails';

/*
 * 30/03/2016
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {};
    handle["/"] = requestHandlers.start;
    handle["/start"] = requestHandlers.start;
    handle["/upload"] = requestHandlers.upload;

server.start( router.route, handle );


/*
 * 31/03/2016
 */
