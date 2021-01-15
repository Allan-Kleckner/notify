// require the mongoose module
const mongoose = require('mongoose');
// set up a shortcut variable (db)
const db = mongoose.connection;
// create a connectionURI variable and assign your MongoDB Atlas URI to it as a string
const connectionURI = 'mongodb+srv://admin:1234@cluster0.fmz1d.mongodb.net/notify?retryWrites=true&w=majority'
// connect to mongoDB
mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
// set up a listener to alert us when we're connected
db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
db.on('error', function(error) {
    console.log(`Encountered the following error: ${error.message}`);
});