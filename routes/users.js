var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var Posts = require('../models/trendings').Posts;
var Category = require('../models/trendings').Category;
var a={};
a = User.find().exec(function(req ,rep,next){});

router.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
      response.send(JSON.stringify(a));
  });

module.exports = router;
