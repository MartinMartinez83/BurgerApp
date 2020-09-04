var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

//static file//
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set up handlebars//
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//routs//
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

// have the port listen//
app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT);
});


