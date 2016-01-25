var express = require('express');
var router = express.Router();
var About = require('../../models/webmodel').About;


router.post('/', function(request, response) {

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
            response.render('/admin/admindashboard/createaboutdata', { message: "New Entry data for about" });
          }
        });

});
module.exports = router;
