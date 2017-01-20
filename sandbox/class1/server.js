
var http = require("http");

http.createServer(
    function(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
).listen(8888);

/*
[sgoda@goldbeef class1]$ node server.js 
/work/td/users/sgoda/td/research/nodejs/learning/class1/server.js:6
        response.writehead(200, {"Content-Type": "text/plain"});
                 ^

TypeError: response.writehead is not a function
    at Server.<anonymous> (/work/td/users/sgoda/td/research/nodejs/learning/class1/server.js:6:18)
    at emitTwo (events.js:106:13)
    at Server.emit (events.js:191:7)
    at HTTPParser.parserOnIncoming [as onIncoming] (_http_server.js:546:12)
    at HTTPParser.parserOnHeadersComplete (_http_common.js:99:23)

*/
