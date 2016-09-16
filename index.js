var express = require('express');
var app = express();
var mongo = require('mongodb');
var FB = require('fb');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile( __dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
