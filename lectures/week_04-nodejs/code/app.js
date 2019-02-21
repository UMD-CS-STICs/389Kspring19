var http = require('http');
const PORT = 8888;

function handleReq(req, res) {
    console.log("New request at " + req.url);
    if (req.url === '/nazifa') {
        var nazifa = {
            age: 21,
            gender: 'f',
            majors: ['computer science']
        };
        res.end(nazifa);
    } else if (req.url === '/tim') {
        var tim = {
            age: 21,
            gender: 'm',
            majors: ['computer science', 'finance']
        };
        res.end(tim);
    } else {
        res.end("Link hit: " + req.url);
    }
}

var server = http.createServer(handleReq);

server.listen(8888, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
