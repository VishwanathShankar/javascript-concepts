var express = require('express');
var rp = require('request-promise');
var app = express();

//setting middleware
console.log(__dirname+'/samples');
app.use(express.static(__dirname + '/samples')); //Serves resources from public folder
console.log("App is starting on 5001");
var server = app.listen(5001);
