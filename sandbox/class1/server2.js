var http = require("http");

function onRequest(request, response) {
    var metadata = {"Content-Type": "text/plain"};
    
    response.writeHead(200, metadata);
    
    var message = "Hello World from Node.js Server";
    
    response.write(message);
    
    response.end();
}

var server = http.createServer(onRequest);

server.listen(8888);
