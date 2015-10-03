var express = require('express');
var router = express.Router();
var Posts = require('../models/dbmodel').Posts;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          Posts.find().exec(function(req ,res,next){
          response.send(JSON.stringify(res));
          });
});

module.exports = router;
