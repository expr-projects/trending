var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var About = require('../models/webmodel').About;
var Gallery = require('../models/webmodel').Gallery;
var TeamStaff = require('../models/webmodel').TeamStaff;
router.get('/', function(request, response) {
        About.find().exec(function(req ,res,next){
          Gallery.find().exec(function(req1 ,res1,next1){
            TeamStaff.find().exec(function(req2 ,res2,next2){
      response.render('schools.ejs',{about :res, gallery :res1, teamStaff :res2});
        });
      });
    });
  });

module.exports = router;
