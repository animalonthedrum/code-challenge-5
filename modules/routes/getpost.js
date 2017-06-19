var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//uses
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

//connect mongoose
mongoose.connect('localhost:/27017/messageboard');

// sock schema
var messageSchema = new mongoose.Schema({
  name: String,
  message: String
}); //end schema

//sock model
var messageModel = mongoose.model('messageModel', messageSchema);


router.get('/', function(req, res) {
  // get and send back all the things
  messageModel.find().then(function(data) {
    res.send(data);
  });
});



router.post('/', function(req, res) {
  console.log('req.body.name: ' + req.body.name);
  // retrieved the req.body
  // putting it into an object to be saved in the db
  var recordToAdd = {
    name: req.body.name,
    message: req.body.message
  };
  // create new record
  var newRecord = messageModel(recordToAdd);
  newRecord.save();
});



module.exports = router;
