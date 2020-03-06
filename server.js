require('./config/config');

// const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const hbs = require('hbs');
// const fs = require('fs');

const passport = require('passport');
// const flash = require('connect-flash');
// const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000; // LocalHost Port
// var Hashids = require('hashids');
//const session = require('express-session');
// const path = require('path');
// const multer = require('multer');
 var {mongoose} = require('./db/mongoose');
// var nodemailer = require('nodemailer');
var helpers = require('handlebars-helpers')();
var handlebars = require('handlebars');
// var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
// require('./middleware/passport')(passport);

var app = express();

// Receive POST in JSON format through forms
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '25mb',
    parameterLimit: 1000000
}));

app.use(bodyParser.json({limit: '25mb'}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper(helpers);

hbs.registerHelper(handlebars);

// Using new libraries

app.use(express.static('public'));

//app.use(cookieParser());
/*
app.use(session({
	secret: 'secretsalt',
	resave: false,
	saveUninitialized: false,
  cookie: {
    maxAge: 1000*60*60*24*31
  }
}));*/
/*
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
*/
// Routes
require('./routes.js')(app, passport);

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app, hbs};
