function route(handle, pathname, response, request)
{
    console.log("About to route a request for " + pathname);
    
    var callback = handle[pathname];
    
    if (typeof callback === 'function') {
        callback(response, request);
    } 
    else {
        console.log("No request handler found for " + pathname);
        
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;