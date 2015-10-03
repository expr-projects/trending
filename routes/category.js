var express = require('express');
var router = express.Router();
var Category = require('../models/dbmodel').Category;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          Category.find().exec(function(req ,res,next){
          response.send(JSON.stringify(res));
        });
});

module.exports = router;
