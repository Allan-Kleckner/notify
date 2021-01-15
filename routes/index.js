//require the express module
const express = require ('express');

//set up router object
const router = express.Router();

//require controller module
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);

//export router object

module.exports = router;