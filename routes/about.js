var express = require('express');
var router = express.Router();
var About = require('../models/dbmodel').About;

router.get('/', function(request, response) {
    var abc;
          response.setHeader('Content-Type', 'application/json');
          About.find().exec(function(req ,res,next){
          response.send(JSON.stringify(res));
          abc=res;
          });


          response.render('test.ejs'
          );
});
//post format for aboutSchema
// {
//      "headingtext" : "entertainment"
//     ,"details" : ""
//     ,"imageUrl" :""
//
// }
router.post('/', function(request, response) {
  var   newaboutSchema = new About();
        newaboutSchema.headingtext = request.body.headingtext;
        newaboutSchema.details = request.body.details;
        newaboutSchema.imageUrl = request.body.imageUrl;
        newaboutSchema.appCode = request.body.appCode;

        newaboutSchema.save(function (err) {

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
