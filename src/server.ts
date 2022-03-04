import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'hbs';
import helpers from 'handlebars-helpers';
import handlebars from 'handlebars';
import path from 'path';

// Routes
import routes from './routes';

const port = process.env.PORT || 5000; // LocalHost Port
const app = express();
// start routes
routes(app);

// Receive POST in JSON format through forms
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '25mb',
    parameterLimit: 1000000
}));

app.use(bodyParser.json({limit: '25mb'}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper(helpers);

hbs.registerHelper(handlebars);

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
