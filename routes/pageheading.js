var express = require('express');
var router = express.Router();
var fs=require('fs');
var Pageheading = require('../models/webmodel').Pageheading;

router.get('/', function(request, response) {

          Pageheading.find().exec(function(req ,headingdata,next){

            response.render('test.ejs',{headingdata :headingdata} );

          });
});

router.post('/', function(request, response) {
var imgPath = './public/images/1.jpg';
  var   newSchema = new Pageheading();
        newSchema.customizingId = request.body.customizingId;
        newSchema.headingtext = request.body.headingtext;
        newSchema.headingdescription = request.body.headingdescription;
        newSchema.image = fs.readFileSync(imgPath).toString('base64');
        newSchema.image.contentType= 'jpg'
        newSchema.save(function (err) {
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
