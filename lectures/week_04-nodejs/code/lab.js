const request = require("request");
const http = require("http");

const PORT = 8888;

var a = "test";
function handleReq(req, res){

}

const server = http.createServer(handleReq);

function handleReq(req,res){
    console.log('New Request at ' + req.url);
    res.end('Link hit: ' + req.url);
}


server.listen(PORT, function(){
    console.log('Server listening on http://localhost:${PORT}');
    console.log('hello this is a ${a}');
});
