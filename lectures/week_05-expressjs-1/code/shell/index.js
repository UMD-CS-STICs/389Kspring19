var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

var contacts = {}

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/factorial', function(req, res) {
    var number = req.query.number;
    if (!number) { res.send("Please send a number"); }
    // complete during class
});

app.get('/square', function(req, res) {
    var number = req.query.number;
    if (!number) { res.send("Please send a number"); }
    // complete during class
});

app.get('/sqroot', function(req, res) {
    var number = req.query.number;
    if (!number) { res.send("Please send a number"); }
    // complete during class
});

app.get("/operation/:op", function(req, res) {
    var op = req.params.op;
    var number = req.query.number;

    if (!operations[op]) {
        return res.send("Not a valid operation");
    }
    if (!number) {
        return res.send("Please send a number");
    }
    // complete during class
});

app.get("/contacts", function(req, res) {
  // complete during class
});

app.post("/newcontact", function(req, res) {
	if(!req.body) { return res.send("No data recieved"); }
  // complete during class
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
