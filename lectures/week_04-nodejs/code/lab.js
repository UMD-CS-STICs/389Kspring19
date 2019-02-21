const request = require("request");
const http = require("http");

const PORT = 8888;


const server = http.createServer(handleReq);

function handleReq(req,res){
   // Code here
}


server.listen(PORT, function(){
    console.log('Server listening on http://localhost:${PORT}');
    console.log('hello this is a ${a}');
});
