var express = require('express');
var router = express.Router();
var About = require('../../models/dbmodel').About;

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
  var   newaboutSchema = new About();
        newaboutSchema.headingtext = request.body.headingtext;
        newaboutSchema.details = request.body.details;
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
