var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var About = require('../models/webmodel').About;
var Gallery = require('../models/webmodel').Gallery;
var TeamStaff = require('../models/webmodel').TeamStaff;
var Services = require('../models/webmodel').Services;
router.get('/', function(request, response) {
        About.find().exec(function(req ,about,next){
          Gallery.find().exec(function(req1 ,gallery,next1){
            TeamStaff.find().exec(function(req2 ,teamStaff,next2){
              Services.find().exec(function(req3 ,service,next3){
      response.render('schools.ejs',{about :about, gallery :gallery, teamStaff :teamStaff,service:service});
        });
      });
    });
  });
});
module.exports = router;
