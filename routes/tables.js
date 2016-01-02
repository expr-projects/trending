var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
router.get('/', function(request, response) {
  response.render('tables.ejs');
  });

module.exports = router;
