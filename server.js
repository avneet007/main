var express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser');

 
// creating express server
var app = express();
 
//========= configuration ==========
             
//===== get all the data from the body (POST)

    
// parse application/json 
app.use(bodyParser.json());

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '5mb', extended: false }));
 
// setting static files location './app' for angular app html and js
app.use(express.static(path.join(__dirname, 'client')));
// setting static files location './node_modules' for libs like angular, bootstrap
app.use(express.static('node_modules'));
 
// configure our routes


/*app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
 
 });*/

 
// setting port number for running server
var port = process.env.PORT || 8000;
 
// starting express server
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});