var http = require('http');
var myServer = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>This is too much</h1>');
    response.end();
});

myServer.listen(3000);
console.log('Example app listening on port 3000!');

// node theotherway.js