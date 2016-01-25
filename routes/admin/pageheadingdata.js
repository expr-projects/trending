var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs=require('fs');
var Pageheading = require('../../models/webmodel').Pageheading;


router.post('/', multer({ dest: './uploads' }).single('image'), function(request, response) {

  var   newSchema = new Pageheading();
  newSchema.customizingId = request.body.customizingId;
  newSchema.headingtext = request.body.headingtext;
  newSchema.headingdescription = request.body.headingdescription;
  newSchema.image.data = fs.readFileSync(request.file.path).toString('base64');
  newSchema.image.contentType = request.file.mimetype;
  newSchema.save(function (err) {
    if (err){
      //logger.error(message + '400 | Database insertion failed');
      return next(err);
    }
    else {
      fs.unlink(request.file.path, function(err) {
        // check for errors
        if(err) {
          // go to the error handler middleware
          return next(err);
        }
      });
  response.render('createaboutdata.ejs', { message: "Succefully updated" });
    }
  });


});

module.exports = router;
