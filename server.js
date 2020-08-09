var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

// PARSE APP
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// SET HANDLEBARS
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// IMPORT ROUTES AND GVE THE SERVER ACCESS TO THEM
var routes = require("./controllers/burgerController.js");

app.use(routes);

// START OUR SERVER 
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});