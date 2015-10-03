var express = require('express');
var router = express.Router();
var User = require('../models/dbmodel').User;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          User.find({}).exec(function(req ,res,next){
          response.send(JSON.stringify(res));
        });
  });

module.exports = router;
