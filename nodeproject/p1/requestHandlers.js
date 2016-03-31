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