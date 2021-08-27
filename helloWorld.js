var http = require('http');

var os = require('os');

// var networkInterfaces = os.networkInterfaces();

// console.log(networkInterfaces[0]);


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.end('Hello World!' + JSON.stringify(networkInterfaces));
  res.end('Hello World!' + JSON.stringify(networkInterfaces));
}).listen(80);