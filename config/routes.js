var express = require('express');
var router = express.Router();
module.exports = router;
var http = require('request');
var myImage;
var score;
var num_comments;

router.get('/', function(req, res) {
  res.send('<h1>home</h1>');
});

router.get('/about/:name', function(req, res) {
  res.json( {greeting: 'sup'} );
  console.log(req.params.name);
});

router.get('/reddit', function(req, res) {
  res.send('<img src="' + myImage + '"><br><h1>This post has a score of ' + score + ' and ' + num_comments + ' comments.</h1>')
});

http('http://reddit.com/r/funny.json', function(err, response, body) {
  if (err) throw err;
  var myResult = JSON.parse(body);
  console.log(myResult)

  score = myResult.data.children[1].data.score
  num_comments = myResult.data.children[1].data.num_comments
  myImage = myResult.data.children[1].data.thumbnail
  
  console.log('score:', score);
  console.log('num_comments:', num_comments);
  console.log('myimage:', myImage);
});

module.exports = router;
