var express = require('express');
var router = express.Router();
var fs=require('fs');
var multer = require('multer');
var TeamStaff = require('../../models/webmodel').TeamStaff;

router.post('/', multer({ dest: './uploads' }).single('image'), function(request, response) {


  var   newSchema = new TeamStaff();
        newSchema.customizingId = request.body.customizingId;
        newSchema.name = request.body.name;
        newSchema.role = request.body.role;
        newSchema.image.data = fs.readFileSync(request.file.path).toString('base64');
        newSchema.image.contentType = request.file.mimetype;
        newSchema.f_link = request.body.f_link;
        newSchema.t_link = request.body.t_link;
        newSchema.lin_link = request.body.lin_link;
        newSchema.detailDescription = request.body.detailDescription;

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
