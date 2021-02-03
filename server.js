require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const hbs = require('hbs');

const passport = require('passport');
const port = process.env.PORT || 5000; // LocalHost Port
const { mongoose } = require('./db/mongoose');
const helpers = require('handlebars-helpers')();
const handlebars = require('handlebars');

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

// Routes
require('./routes.js')(app, passport);

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app, hbs};
