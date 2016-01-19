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
  var   newTeamStaffSchema = new TeamStaff();
        newTeamStaffSchema.memberName = request.body.headingtext;
        newTeamStaffSchema.roleName = request.body.details;
        newTeamStaffSchema.imageUrl = request.body.imageUrl;
        newTeamStaffSchema.imageUrl = request.body.imageUrl;

        newTeamStaffSchema.save(function (err) {

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
