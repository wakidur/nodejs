/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 30/03/2016
 */

/*
function start() {
    console.log("Request handler 'start'  was called.");
    
}
function upload() {
    console.log("Request handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;

*/

/*
 * 31/03/2016
 */

/*
function start() {
    console.log("Request handler 'start' was called.");
    return "Hello Start";
}
function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}
module.exports.start = start;
module.exports.upload = upload;

*/
/*
 * 02/04/2016
 * Blocking and non-blocking
 */
/*
function start() {
    console.log( "Request handler 'start' was called" );
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called ");
    return "Hello upload";
}
module.exports.start = start;
module.exports.upload = upload;













var exec = require( "child_process" ).exec;
function start() {
    console.log("Request handler 'start' was called.");
    var content = "empty";
    exec( "ls - lah" , function( error, stdout, stdeer) {
        content = stdout;
    });
    return content;
    }
function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}
exports.start = start;
exports.upload = upload;
*/


/*
 * 03/04/2016
 *  * Responding request handlers with non-blocking operations;
 */
/*
var exec = require( "child_process" ).exec;
function start( response ) {
    console.log( "Request handler 'start' was called." );
    exec("ls-lah", function( error, stdout, stderr ){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });
    
}
function upload( response ) {
    console.log( "Request handler 'upload' was called." );
    response.writeHand(200, {"Content-Type":"text/plain"});
    response.write("Hello upload");
    response.end();
}
module.exports.start = start();
module.exports.upload = upload();




var exec = require( "child_process" ).exec;
function start( response ) {
    console.log("Request handler 'start' was called");
    exec("find/" ,{
        timeout: 10000,
        maxBuffer: 20000*1024
    },
    function (error, stdout, stderr){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        resonse.end();
    });
}
function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello Upload");
    response.end();
}

module.exports.start = start();
module.exports.upload = upload();

*/
/*
 * 04/04/2016
 * 
 *
 **/
function start(response) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html; ' +
            'charset=UTF-8" />' +
            '</head>' +
            '<body>' +
            '<form action="/upload" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea>' +
            '<input type="submit" value="Submit text" />' +
            '</form>' +
            '</body>' +
            '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}
exports.start = start;
exports.upload = upload;




function start(response, postData) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html; ' +
            'charset=UTF-8" />' +
            '</head>' +
            '<body>' +
            '<form action="/upload" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea>' +
            '<input type="submit" value="Submit text" />' +
            Building the application stack 54
            '</form>' +
            '</body>' +
            '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent: " + postData);
    response.end();
}
exports.start = start;
exports.upload = upload;




var querystring = require("querystring");

function start(response, postData) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html; ' +
            'charset=UTF-8" />' +
            '</head>' +
            '<body>' +
            '<form action="/upload" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea>' +
            '<input type="submit" value="Submit text" />' +
            '</form>' +
            '</body>' +
            '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent the text: " +
            querystring.parse(postData).text);
    response.end();
}
exports.start = start;
exports.upload = upload;