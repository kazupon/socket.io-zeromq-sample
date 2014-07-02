var debug = require('debug')('frontend');
var app = require('express')();
var http = require('http').Server(app);
var zmq = require('socket.io-zeromq');


app.get('/', function (req, res) {
  res.sendfile('index.html');
});


var io = require('socket.io')(http);
io.adapter(zmq({
  host: '127.0.0.1',
  pubPort: 5555,
  subPort: 5556
}));;

var port = parseInt(process.env.NODE_ENV_PORT || '8000');
http.listen(port, function () {
  debug('listening on *:' + port);

  io.on('connection', function (socket) {
    debug('connection event');

    socket.on('disconnect', function () {
      debug('disconnect event');
    });

    socket.on('chat message', function (msg) {
      debug('chat message event', msg);
      io.emit('chat message', msg);
    });

    socket.on('ack', function (msg) {
      debug('ack event', msg);
    });
  });
});
