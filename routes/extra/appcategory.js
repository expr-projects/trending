var express = require('express');
var router = express.Router();
var async = require('async');
var AppCategory = require('../../models/dbmodel').AppCategory;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          AppCategory.findOne().exec(function(req ,res,next){
          response.send(JSON.stringify(res));
        });
  });
  //post format for menu
  // {
  //      "category" : {
  //             "music" : {
  //                      "playlist" : "PLAYLIST",
  //                      "genres"   : "GENRES",
  //                      "artist"   : "ARTIST",
  //                      "albums"   : "ALBUMS",
  //                      "songs"    : "SONGS"
  //                     },
  //             "hisaab" : {
  //                      "groups" : "GROUPS",
  //                      "balance": "BALANCE"
  //                    },
  //             "trending" :
  //                 {
  //                       "types" :
  //                       {
  //                             "politics"        : "POLITICS",
  //                             "entertainment"   : "ENTERTAINMENT",
  //                             "sports"          : "SPORTS",
  //                             "science"         : "SCIENCE",
  //                             "health"          : "HEALTH"
  //                       }
  //                 }
  //
  //
  //     }
  //  }


router.post('/',function(request,response){

  var   appCategoryEntry = new AppCategory();
        appCategoryEntry.category.music.playlist  = request.body.category.music.playlist;
        appCategoryEntry.category.music.genres    = request.body.category.music.genres;
        appCategoryEntry.category.music.artist    = request.body.category.music.artist;
        appCategoryEntry.category.music.albums    = request.body.category.music.albums;
        appCategoryEntry.category.music.songs     = request.body.category.music.songs;
        appCategoryEntry.category.hisaab.groups   = request.body.category.hisaab.groups;
        appCategoryEntry.category.hisaab.balance  = request.body.category.hisaab.balance;
        appCategoryEntry.category.trending.types.politics       = request.body.category.trending.types.politics;
        appCategoryEntry.category.trending.types.entertainment  = request.body.category.trending.types.entertainment;
        appCategoryEntry.category.trending.types.sports         = request.body.category.trending.types.sports;
        appCategoryEntry.category.trending.types.science        = request.body.category.trending.types.science;
        appCategoryEntry.category.trending.types.health         = request.body.category.trending.types.health;

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

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}


module.exports = router;
