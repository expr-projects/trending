var express = require('express');
var router = express.Router();
var TrendingList = require('../models/dbmodel').TrendingList;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          TrendingList.find().exec(function(req ,res,next){
          response.send(JSON.stringify(res));
          });
});
//post format for trending
// {
//      "category" : "entertainment"
//     ,"creationDate" : ""
//     ,"quetions" :{
//               "qId" : "rew"
//              ,"postedById" : "rkp"
//              ,"description" : "political view"
//              ,"answers" :{
//                         "postedById" : "goti"
//                        ,"description" :"descriptive"
//                        ,"date" : ""
//                       }
//             }
//
//
// }
router.post('/',isLoggedIn, function(request, response) {
  var   newTrendingList = new TrendingList();
        newTrendingList.category = request.body.category;
        newTrendingList.creationDate = request.body.date;
        newTrendingList.quetions.qId = request.body.quetions.qId;
        newTrendingList.quetions.postedById = request.body.quetions.postedById;
        newTrendingList.quetions.description = request.body.quetions.description;
        newTrendingList.quetions.answers.postedById = request.body.quetions.answers.postedById;
        newTrendingList.quetions.answers.description = request.body.quetions.answers.description;
        newTrendingList.quetions.answers.date = request.body.quetions.answers.date;

        newTrendingList.save(function (err) {

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
