var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var bodyParser = require('body-parser')

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" })); 
app.set("view engine", "handlebars");

var route = require("./controllers/burger_controller");

app.use(route);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });