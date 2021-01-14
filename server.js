// Require our modules
const express = require ('express');
const morgan = require ('morgan');
const methodOverride = require('method-override');

//set up the port value
const port = 3000;

// set up the express app
const app = express();

// TODO: connect to the DB
// configure our settings with .set()
app.set('view engine', 'ejs');

// mount our middleware with .use()
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));//body parsing middleware
app.use(express.static('public'));


// mount our routes with .use()
// tell the app to listen