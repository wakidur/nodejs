
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




    var server = require("./server"),
        router = require("./router");
        server.start(router.route);


/*
 * 29/03/2016
 */