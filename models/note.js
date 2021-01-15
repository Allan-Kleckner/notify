//require mongoose
const mongoose = require('mongoose');

//create a shortcut var for Schema
const Schema = mongoose.Schema;

//create a note Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    }, {timestamps: true });

//export the result of compiling our schema in a model
module.exports = mongoose.model('Note', noteSchema);

