// var http = require('http')
// var dateTime = new Date
// var utcDate = dateTime.toUTCString()
// var port = process.env.PORT || 3000
//
// var server = http.createServer(function(req, res) {
//   if (req.url === '/') {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('<h1>Hello, Node. You seem pretty cool!</h1>');
//   } else if (req.url === '/about') {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('<h1>This is the about page.</h1>');
//   } else {
//     res.writeHead (404, {'Content-Type': 'text/html'})
//     res.end('<h1>404 error</h1>')
//   }
//   console.log(req.method, 'A request has been made on', req.url, 'on', utcDate)
// });
//
// server.listen(port, function() {
//   console.log('Our server is running on port', port)
// });

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./config/routes');

app.use(function(req, res, next) {
  console.log(req.headers['user-agent']);
  next();
});
app.use('/', routes);

app.listen(port, function() {
    console.log('magic is happening on port ' + port);
});
