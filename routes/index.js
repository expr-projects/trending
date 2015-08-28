var express = require('express');
var router = express.Router();
var index = require('../routes/index');



  router.get('/index', isLoggedIn, function(req, res){
    res.render('index.ejs', { user: req.user });
        });

module.exports =router;
  function isLoggedIn(req, res, next) {
  	if(req.isAuthenticated()){
  		return next();
  	}

  	res.redirect('/login');
  }
