var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

function accept(req, res){
    file.serve(req, res);
}
console.log("Dimkys Start, 5 minuts fly norm");
if (!module.parent) {
    http.createServer(accept).listen(8080);
} else {
    exports.accept = accept;
}