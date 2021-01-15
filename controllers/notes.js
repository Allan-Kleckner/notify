// (optional )require the model
const Note = require('../models/note');

//set up module.exports

module.exports = {};

//////mongoose playground

//define our controller actions
require('../config/database');
Note.create({
    title: 'First Note',
    body: 'This is my first note.'}, function (err, doc) {
        if(err) {
            console.log(err)
        }else {
            console.log(doc);
        }
});
