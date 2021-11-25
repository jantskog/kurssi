/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.
Save the following server in example.js:
*/
//var readline = require('readline');

var net = require('net');
//var serverinSoketti = null;

var chättääjät = []
var server = net.createServer(function (socket) {
	console.log('client connected');
	socket.write('Echo\r\n');
	chättääjät.push(socket)

	socket.on('data', function (data) {
		console.log('Palvelin vastaanotti: ' + data);
        chättääjät.forEach((item)=>{
			item.write(data)
		})

	});

	socket.on('close', function () {
		console.log('Connection closed');
	});


	socket.pipe(socket);
});


server.listen(1337, '127.0.0.1', function() { 
	console.log('server is listening');
});

/*
And connect with a tcp client from the command line using netcat, the *nix
utility for reading and writing across tcp/udp network connections.  I've only
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/

/* Or use this example tcp client written in node.js.  (Originated with
example code from
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */
