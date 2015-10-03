var express = require('express');
var router = express.Router();
var async = require('async');
var AppCategory = require('../models/dbmodel').AppCategory;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          AppCategory.find({}).exec(function(req ,res,next){
          response.send(JSON.stringify(res));
        });
  });
  //post format for menu
  // {
  //        "playlist" : "PLAYLIST",
  //        "genres"   : "GENRES",
  //        "artist"   : "ARTIST",
  //        "albums"   : "ALBUMS",
  //        "songs"    : "SONGS"
  // }

router.post('/',function(request,response){

  var   appCategoryEntry = new AppCategory();
        appCategoryEntry.category.music.playlist = request.body.playlist;
        appCategoryEntry.category.music.genres = request.body.genres;
        appCategoryEntry.category.music.artist = request.body.artist;
        appCategoryEntry.category.music.albums = request.body.albums;
        appCategoryEntry.category.music.songs = request.body.songs;



      appCategoryEntry.save(function (err) {

        if (err){
          //logger.error(message + '400 | Database insertion failed');
          return next(err);
        }
        else {
          response.setHeader('Content-Type', 'application/json');

          response.send(JSON.stringify("Succefully updated"));
        }
      });

});



module.exports = router;
