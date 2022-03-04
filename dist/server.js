import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'hbs';
const port = process.env.PORT || 5000; // LocalHost Port
import helpers from 'handlebars-helpers';
import handlebars from 'handlebars';
const app = express();
// Receive POST in JSON format through forms
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '25mb',
    parameterLimit: 1000000
}));
app.use(bodyParser.json({ limit: '25mb' }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper(helpers);
hbs.registerHelper(handlebars);
// Using new libraries
app.use(express.static('public'));
// Routes
require('./routes.js')(app);
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
module.exports = { app, hbs };
