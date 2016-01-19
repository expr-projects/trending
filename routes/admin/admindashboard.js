var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
router.get('/', function(request, response) {
  response.render('admindashboard.ejs');
  });

  router.get('/data', function(request, response) {
    response.send('HDHSHD');
    });


module.exports = router;
