/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http')
  , routes = require('./routes')
  , ejs = require('ejs');

var app = express();
var request = require('request');

app.configure(function(){
  app.set('port', 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/admin', routes.admin);
app.get('/easel', routes.easel);
app.get('/log', routes.log);

var server = http.createServer(app);
var socketIO = require("socket.io");

server.listen(3000);

var io = socketIO.listen(server);
io.sockets.on("connection", function (socket) {
  socket.on("message", function (data) {
    // 全員に受け取ったメッセージを送る
    io.sockets.emit("message", {value: data.value});
    // 人工知能APIを叩く
    request('http://www.google.com', function (error, response, body) {
      var ai_msg = '';
      if (!error && response.statusCode == 200) {
        ai_msg = response.statusCode;
      } else {
        ai_msg = 'error';
      }
      // 人工知能のメッセージを送る
      io.sockets.emit("machine_reply", {value: ai_msg});
    });
  });
  socket.on("disconnect", function () {
    io.sockets.emit("message", {value:"Connection Lost"});
  });
  socket.on("blackout", function() {
    io.sockets.emit("blackout",{});
  });
  socket.on("alert", function() {
    io.sockets.emit("alert",{});
  });
});
