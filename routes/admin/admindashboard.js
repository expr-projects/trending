var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
router.get('/', function(request, response) {
  response.render('admindashboard.ejs',{message :""});
  });

router.get('/createaboutdata', function(request, response) {

      response.render('createaboutdata.ejs',{message :""});
  });

router.get('/forms', function(request, response) {
    response.render('forms.ejs',{message :""});
    });

router.get('/flot', function(request, response) {
      response.render('flot.ejs',{message :""});
      });

router.get('/morris', function(request, response) {
        response.render('morris.ejs',{message :""});
        });

router.get('/tables', function(request, response) {
          response.render('tables.ejs',{message :""});
          });
module.exports = router;
