// Require our modules
const express = require ('express');
const morgan = require ('morgan');
const methodOverride = require('method-override');

//set up the port value
const port = 3000;

//require our router modules
const indexRouter = require('./routes/index');

console.log(indexRouter);
// set up the express app
const app = express();


// connect to the DB

require('../config/database');

// configure our settings with .set()
app.set('view engine', 'ejs');

// mount our middleware with .use()
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));//body parsing middleware
app.use(express.static('public'));

const router = express.Router();

// ToDo:mount our routes with .use()

app.use('/', indexRouter);
// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on ${port}.`)
})