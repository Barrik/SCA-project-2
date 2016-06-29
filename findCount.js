var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var findCounting = function(db, callback, req, res) {
   var cursor =db.collection('counting').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc !== null) {
         console.dir(doc);
         console.log(doc);
         res.json(doc);
      } else {
         callback();
      }
   });
};

module.exports.getCountNumber = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findCounting(db, function(req, res) {
        db.close();
    }, req, res);
  });
};
