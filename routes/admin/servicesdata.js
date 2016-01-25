var express = require('express');
var router = express.Router();
var Services = require('../../models/webmodel').Services;

router.post('/' ,function(request, response) {

  var   newSchema = new Services();
        newSchema.customizingId = request.body.customizingId;
        newSchema.headingtext = request.body.headingtext;
        newSchema.headingdescription = request.body.headingdescription;
        newSchema.icon = request.body.icon;
        newSchema.save(function (err) {
          if (err){
            //logger.error(message + '400 | Database insertion failed');
            return next(err);
          }
          else {

        response.redirect('/admin/admindashboard/createaboutdata', { message: "Succefully updated" });
          }
        });

});

module.exports = router;
