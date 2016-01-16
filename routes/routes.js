// var mongoose = require('mongoose');
var express= require('express');
var router = express.Router();
var users = require('../routes/users');
//**************extra routes****************************************************
var appCategory =require('../routes/extra/appcategory');
var drawerList =require('../routes/extra/drawerlist');
var dashboard = require('../routes/extra/dashboard');
var creative = require('../routes/extra/creative');
var trending =require('../routes/extra/trending');
var company =require('../routes/extra/company');
var landing = require('../routes/extra/landing');
var theme = require('../routes/extra/theme');
var blog = require('../routes/extra/blog');

//admin dashboard **************************************************************
var createaboutdata = require('../routes/admin/createaboutdata');
var admindashboard = require('../routes/admin/admindashboard');
var tables = require('../routes/admin/tables');
var morris = require('../routes/admin/morris');
var forms = require('../routes/admin/forms');
var flot = require('../routes/admin/flot');

//*****Main Routing ************************************************************
var grampanchayat = require('../routes/grampanchayat');
var healthcare = require('../routes/healthcare');
var teamStaff = require('../routes/team_staff');
var gallery = require('../routes/gallerydata');
var schools = require('../routes/schools');
var about = require('../routes/about');
var test = require('../routes/test');
var log = require('loglevel');

//******************DB Model Call for index page********************************
var Gallery = require('../models/dbmodel').Gallery;
var About = require('../models/dbmodel').About;

module.exports = function(app, passport) {

//admin routes =================================================================
    app.use('/admin/createaboutdata',createaboutdata);
    app.use('/admin/admindashboard',admindashboard);
    app.use('/admin/morris',morris);
    app.use('/admin/tables',tables);
    app.use('/admin/forms',forms);
    app.use('/admin/flot',flot);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    app.use('/grampanchayat',grampanchayat);
    app.use('/users',isLoggedIn,users);
    app.use('/healthcare',healthcare);
    app.use('/teamStaff',teamStaff);
    app.use('/menu',appCategory);
    app.use('/gallery',gallery);
    app.use('/schools',schools);
    app.use('/about',about);
    app.use('/test',test);

//***********************extra routing******************************************
    app.use('/extra/drawerlist',drawerList);
    app.use('/extra/dashboard',dashboard);
    app.use('/extra/trending',trending);
    app.use('/extra/creative',creative);
    app.use('/extra/company',company);
    app.use('/extra/landing',landing);
    app.use('/extra/theme',theme);
    app.use('/extra/blog',blog);

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
