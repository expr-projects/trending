var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/dbmodel').Product;
var fs=require('fs');
router.get('/', function(request, response) {
  Product.find().exec(function(req ,products,next2){
  response.render('test.ejs',{products:products});
   });

});

router.post('/', function(request, response) {
  
  var newSchema = new Product();
      newSchema.category= 'something';
      newSchema.product= 'something';
      newSchema.model = 'something';
      newSchema.brand = 'something';
      newSchema.size =  'something';
      newSchema.price = 'something';
      newSchema.description = 'something';
      newSchema.color = 'something';
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
