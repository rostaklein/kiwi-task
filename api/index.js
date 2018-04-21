var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
var port = process.env.PORT || 3001;

var app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

var PhonewordsController = require('./phonewords/PhonewordsController');
app.use('/pw', PhonewordsController);

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});