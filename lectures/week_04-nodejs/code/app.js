var http = require('http');
const PORT = 8888;

function handleReq(req, res) {
    console.log("New request at " + req.url);
    
}

var server = http.createServer(handleReq);

server.listen(8888, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
