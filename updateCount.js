var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var updateCounting = function(db, callback, req, res) {
  // req.body.newNumber;
  console.log(req.body);
  var countNumber = req.body.newNumber;
  db.collection('counting').updateOne(
    {"name": "testItem"},
    {
      $set: { "count": countNumber },
      $currentDate: { "lastModified": true }
    }, function(err, results) {
    console.log(err);
    res.json({'message':'It done werkked'});
    callback();
  });
};

module.exports.updateCountNumber = function (req,res) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    updateCounting(db,function(req, res) {
      db.close();
    }, req, res);
  });
};
