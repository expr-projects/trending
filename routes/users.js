var express = require('express');
var router = express.Router();
var User = require('../models/dbmodel').User;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          User.find({}).exec(function(req ,res,next){
          response.send(JSON.stringify(res));
        });
  });
  function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
          return next();

      res.redirect('/');
  }
module.exports = router;
//160002344263 --hdfc
//customerservices.cards@hdfcbank.com
