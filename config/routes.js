var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/', function(req, res) {
  res.send('<h1>home</h1>');
});

router.get('/about/:name', function(req, res) {
  res.json( {greeting: 'sup'} );
  console.log(req.params.name);
});

module.exports = router;
