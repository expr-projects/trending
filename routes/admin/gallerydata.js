var express = require('express');
var router = express.Router();
var fs=require('fs');
var multer = require('multer');
var Gallery = require('../../models/webmodel').Gallery;

router.get('/', function(request, response) {

    response.render('createaboutdata.ejs');
});

router.post('/', multer({ dest: './uploads' }).single('image'), function(request, response) {
var imgPath = './public/images/1.jpg';
  var   newSchema = new Gallery();
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
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify("Succefully updated"));
          }
        });

});

module.exports = router;
