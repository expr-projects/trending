
var express = require('express')
    , http = require('http')
    ,morgan = require('morgan')
    ,cookieParser = require('cookie-parser')
    ,mongoose = require('mongoose')
    ,favicon = require('serve-favicon')
    ,methodOverride = require('method-override')
    ,session = require('express-session')
    ,bodyParser = require('body-parser')
    ,multer = require('multer')
    ,errorHandler = require('errorhandler')
    ,path = require('path')
    ,passport = require('passport')
    ,flash = require('connect-flash');
//****************************routes**************************************


/************************************************************************************/
var app = express();
/*************************db connection***********************************************/
var configDB = require('./config/database.js');
mongoose.connect(configDB.url, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + configDB.url + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + configDB.url);
  }
});
/*****************************app configuration*************************************/
require('./config/passport')(passport);
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(methodOverride());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
/******************************routes configuration****************************************/
require('./routes/routes.js')(app, passport);


//error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}
/*******************************server creation******************************************/
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
