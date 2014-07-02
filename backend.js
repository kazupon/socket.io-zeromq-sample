var debug = require('debug')('backend');
var emitter = require('socket.io-zeromq-emitter')();

setInterval(function () {
  var now = new Date();
  debug('emit time event', now);
  emitter.emit('time', now);
}, 2000);
