//required npm packages. dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = ("path");

//setup express app
var app = express();
var PORT = 3000;

console.log("listening on port " + PORT);

//setup the express app to handle data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(3000);



