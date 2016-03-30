/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start() {
    console.log("Request handler 'start'  was called.");
    
}
function upload() {
    console.log("Request handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;
