// var mongoose = require('mongoose');
var express= require('express');
var router = express.Router();



//*****Main Routing ************************************************************

var log = require('loglevel');

//******************DB Model Call for index page********************************
var Gallery = require('../models/webmodel').Gallery;
var About = require('../models/webmodel').About;

module.exports = function(app, passport) {

//admin routes =================================================================
    app.use('/admin/createaboutdata',require('../routes/admin/createaboutdata'));
    app.use('/admin/admindashboard', require('../routes/admin/admindashboard'));
    // app.use('/admin/morris', require('../routes/admin/morris'));
    // app.use('/admin/tables',require('../routes/admin/tables'));
    // app.use('/admin/forms',require('../routes/admin/forms'));
    // app.use('/admin/flot',require('../routes/admin/flot'));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    app.use('/grampanchayat',require('../routes/grampanchayat'));
    app.use('/users',isLoggedIn,require('../routes/users'));
    app.use('/healthcare',require('../routes/healthcare'));
    app.use('/teamStaff',require('../routes/team_staffdata'));
    app.use('/menu',require('../routes/extra/appcategory'));
    app.use('/gallery',require('../routes/gallerydata'));
    app.use('/schools',require('../routes/schools'));
    app.use('/about',require('../routes/aboutdata'));
    app.use('/test',require('../routes/test'));

//***********************extra routing******************************************
    app.use('/extra/drawerlist',require('../routes/extra/drawerlist'));
    app.use('/extra/dashboard',require('../routes/extra/dashboard'));
    app.use('/extra/trending',require('../routes/extra/trending'));
    app.use('/extra/creative',require('../routes/extra/creative'));
    app.use('/extra/company',require('../routes/extra/company'));
    app.use('/extra/landing',require('../routes/extra/landing'));
    app.use('/extra/theme',require('../routes/extra/theme'));
    app.use('/extra/blog',require('../routes/extra/blog'));

//Home Section +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    app.get('/', function(req, res) {
      About.find().exec(function(req1 ,res1,next1){
        Gallery.find().exec(function(req2 ,res2,next2){
    res.render('index.ejs',{about :res1, gallery :res2, message: req.flash('loginMessage')});
      });
    });
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });
    // app.get('/:username/:password', function(req, res){
  	// 	var newUser = new User();
  	// 	newUser._id = req.params._id;
  	// 	newUser.password = req.params.password;
  	// 	console.log(newUser._id + " " + newUser.password);
  	// 	newUser.save(function(err){
  	// 		if(err)
  	// 			throw err;
  	// 	});
  	// 	res.send("Success!");
  	// });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('schools.ejs', { message: req.flash('loginMessage') });
        });
        log.info("unreasonably simple");
        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('index.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        // app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
        //
        // // handle the callback after facebook has authenticated the user
        // app.get('/auth/facebook/callback',
        //     passport.authenticate('facebook', {
        //         successRedirect : '/profile',
        //         failureRedirect : '/'
        //     }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        // app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));
        //
        // // handle the callback after twitter has authenticated the user
        // app.get('/auth/twitter/callback',
        //     passport.authenticate('twitter', {
        //         successRedirect : '/profile',
        //         failureRedirect : '/'
        //     }));


    // google ---------------------------------

        // send to google to do the authentication
        // app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
        //
        // // the callback after google has authenticated the user
        // app.get('/oauth2/callback',
        //     passport.authenticate('google', {
        //         successRedirect : '/profile',
        //         failureRedirect : '/'
        //     }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
        // app.get('/connect/local', function(req, res) {
        //     res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        // });
        // app.post('/connect/local', passport.authenticate('local-signup', {
        //     successRedirect : '/profile', // redirect to the secure profile section
        //     failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
        //     failureFlash : true // allow flash messages
        // }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        // app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));
        //
        // // handle the callback after facebook has authorized the user
        // app.get('/connect/facebook/callback',
        //     passport.authorize('facebook', {
        //         successRedirect : '/profile',
        //         failureRedirect : '/'
        //     }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        // app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));
        //
        // // handle the callback after twitter has authorized the user
        // app.get('/connect/twitter/callback',
        //     passport.authorize('twitter', {
        //         successRedirect : '/profile',
        //         failureRedirect : '/'
        //     }));


    // google ---------------------------------

        // send to google to do the authentication
        // app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));
        //
        // // the callback after google has authorized the user
        // app.get('/connect/google/callback',
        //     passport.authorize('google', {
        //         successRedirect : '/profile',
        //         failureRedirect : '/'
        //     }));

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
