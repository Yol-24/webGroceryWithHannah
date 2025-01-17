
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('./app/routes/user.route.js')(app);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'))

global.base = __dirname 
// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, { useFindAndModify: false })
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    }).catch(err => {
        console.log('Could not connect to MongoDB.');
        process.exit();
    });


// Create a Server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)

})