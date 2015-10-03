var express = require('express');
var router = express.Router();
var drawerList = require('../models/dbmodel').DrawerList;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          drawerList.find().exec(function(req ,res,next){
          response.send(JSON.stringify(res));
        });
});
router.post('/',isLoggedIn,function(request, response) {
  var   newdrawerList = new drawerList();
        newdrawerList.app.name1 = request.body.app.name1;
        newdrawerList.save(function (err) {

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
