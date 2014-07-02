# socket.io-zeromq-sample

This project is socket.io [zeromq](http://zeromq.org) implementation sample.

# Setup

```
$ git clone git@github.com:kazupon/socket.io-zeromq-sample.git
$ npm install
```

# Usage

## Run the zeromq pub/sub server

```shell
$ ./node_modules/.bin/socket.io-zeromq-server
```

Use the `socket.io-zeromq-server`.


## Run the frontend

```shell
$ node ./frontend.js
```
In `frontend.js`, Use the `socket.io-zeromq` adapter.


## Run the backend

```
$ node ./backend.js
```

In `backend.js`, Use the `socket.io-zeromq-emitter` emitter.


# License

[MIT license](http://www.opensource.org/licenses/mit-license.php).

See the `LICENSE`.
