// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Set up Express
var app = express();
var PORT = 3000;
var reservations = [];


// Sets up the express app to handle data
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



// Routes

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


//app.get()

app.get("/api/tables", function (req, res){
	res.json()
})

app.get("/api/reserve", function (req, res){
	res.json(reservations);
})


/*

app.post("/api/new", function (req, response) {

  var newReservation = {
  	name: "Peter",
  	phone: "404-931-8079",
  	email: "pfullen.code@gmail.com",
  	id: "pfullen"

  }   //req.body;

reservations.push(newReservation)

console.log(reservations);

});
*/

// Starts the server to begin listening

app.listen(PORT, function() {
	console.log("App listening on PORT" + PORT);
})
