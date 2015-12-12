var static = require('node-static');

var file = new static.Server('./dist');

require('http').createServer(function (request, response) {
    file.serve(request, response);
}).listen(9000);
console.log('Server running at localhost:9000');
