//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');
var message = require('./modules/routes/getpost.js');


//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', index);
app.use('/message', message);
//globals
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('up on port:', port);
});
