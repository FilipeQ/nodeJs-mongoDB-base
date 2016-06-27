var express = require('express');
var app = express();
var http = require('http');
var compression = require('compression');
var mongoose = require('./helpers/mongoose');

app.use(compression());
mongoose.mongooseConnect();

//Configure routes
var main = require('./routes/main');

app.use('/', main);

var port = 80;
http.createServer(app).listen(port);

console.log('Server running on port :' + port);