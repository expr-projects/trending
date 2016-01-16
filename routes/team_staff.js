var express = require('express');
var router = express.Router();
var TeamStaff = require('../models/dbmodel').TeamStaff;

router.get('/', function(request, response) {

    response.render('createaboutdata.ejs');
});
//post format for aboutSchema
// {
//      "memberName" : "entertainment"
//     ,"roleName" : ""
//     ,"imageUrl" :""
//
// }
router.post('/', function(request, response) {
  var   newaboutSchema = new TeamStaff();
        newaboutSchema.memberName = request.body.headingtext;
        newaboutSchema.roleName = request.body.details;
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
