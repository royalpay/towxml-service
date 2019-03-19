var express = require('express');
var routes = require('./server/routes.js');
var app = express();;

var port = 9600;
routes.attachTo(app);
app.listen(port);

console.log("Running on http://localhost:" + port);