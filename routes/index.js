var express = require('express');
var router = express.Router();

var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* Agregar counter */
  dogstatsd.increment('index');
  res.send('<p>HTML Data</p>');
});

module.exports = router;
