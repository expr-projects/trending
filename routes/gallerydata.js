var express = require('express');
var router = express.Router();
var Gallery = require('../models/dbmodel').Gallery;

router.get('/', function(request, response) {

    response.render('createaboutdata.ejs');
});
//post format for aboutSchema
// {
//      "headingtext" : "entertainment"
//     ,"details" : ""
//     ,"imageUrl" :""
//
// }
router.post('/', function(request, response) {
  var   newaboutSchema = new Gallery();
        newaboutSchema.heading = request.body.headingtext;
        newaboutSchema.description = request.body.details;
        newaboutSchema.imageUrl = request.body.imageUrl;


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
