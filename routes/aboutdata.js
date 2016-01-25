var express = require('express');
var fs=require('fs');
var multer = require('multer');
var router = express.Router();
var About = require('../models/webmodel').About;


router.post('/', multer({ dest: './uploads' }).single('image'), function(request, response) {

  var   newSchema = new About();
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
        response.redirect('/admin/admindashboard/createaboutdata', { message: "Succefully updated" });
          }
        });

});

module.exports = router;
