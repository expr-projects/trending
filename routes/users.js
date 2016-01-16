var express = require('express');
var router = express.Router();
var User = require('../models/dbmodel').User;

router.get('/', function(request, response) {
          response.setHeader('Content-Type', 'application/json');
          User.find({}).exec(function(req ,res,next){
          response.send(JSON.stringify(res));
        });
  });
  function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
          return next();

      res.redirect('/');
  }
module.exports = router;
//160002344263 --hdfc
//customerservices.cards@hdfcbank.com

// <script>
// function test(imagelink,text1,text2,classname){
//
// $("#ul1").append($('<li/>',{'class' : classname })
//
//
//     .append($('<div/>', {'class': 'timeline-image'}).append(
//
//                       $('<a/>', {'href':imagelink}).append($('<img/>', {'src': imagelink  , 'class':'img-circle img-responsive','alt':'' }))
//                     ))
//
//     .append(
//         $('<div/>', {'class': 'timeline-panel'})
//         .append($('<div/>', {'class': 'timeline-heading'}).append($('<h4/>', {'class': 'subheading',text: text1})))
//         .append($('<div/>', {'class': 'timeline-body'}).append($('<p/>', {'class': 'text-muted',text: text2 })))
//       )
// );
// };
//
// </script>
