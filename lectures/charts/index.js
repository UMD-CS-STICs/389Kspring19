var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var exphbs = require("express-handlebars");
var expstate = require("express-state");
var app = express();
var PORT = 3000;

var dataUtil = require("./data-util.js");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/public", express.static("public"));
expstate.extend(app);

app.set("state namespace", "App");

var grocery_items = {
  apple: { count: 0, price: 0.5 },
  pepsi: { count: 0, price: 1.0 },
  ramen: { count: 0, price: 5.5 },
  milk: { count: 0, price: 3.25 }
};

var API_KEYS = {
  GOOGLE_API_KEY: "102938120938123",
  FACEBOOK_API_KEY: "12039812093"
};

app.expose(API_KEYS, "API_KEYS");

app.get("/", function(req, res) {
  let labels = [];
  let values = [];

  for (var key in grocery_items) {
    console.log(key);
    labels.push(key);
    values.push(grocery_items[key].count);
  }
  console.log(labels);
  res.render("home", { title: "hello world", labels: labels, values: values });
});

app.get("/money", function(req, res) {
  let labels = [];
  let values = [];


  for (var key in grocery_items) {
    console.log(key);
	labels.push(key);
    values.push(grocery_items[key].count * grocery_items[key].price);
  }
  console.log(labels);
  res.render("money", { title: "hello world", labels: labels, values: values });
});

app.get("/forms", function(req, res) {
  res.render("forms", {});
});

app.post("/purchase", function(req, res) {
  for (var k in req.body) {
    grocery_items[k].count += parseInt(req.body[k]);
  }
  res.send("OK")
});

app.listen(process.env.PORT || PORT, function() {
  console.log("Server listening on port:", PORT);
});
