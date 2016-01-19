var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var About = require('../models/dbmodel').About;
var Gallery = require('../models/dbmodel').Gallery;
var TeamStaff = require('../models/dbmodel').TeamStaff;
router.get('/', function(request, response) {
        // About.find().exec(function(req ,res,next){
        //   TeamStaff.find().exec(function(req1 ,res1,next1){
        //     Gallery.find().exec(function(req2 ,res2,next2){
      // response.render('test.ejs',{data :res,teamStaff :res1,gallary :res2});
    //     });
    //   });
    // });
    response.render('fileupload.ejs');
  });

module.exports = router;
