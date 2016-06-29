var express = require('express');
var findCount = require('./findCount');
var updateCount = require('./updateCount');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/main', function(req, res) {findCount.getCountNumber(req, res);});
app.post('/update', function(req, res) {updateCount.updateCountNumber(req, res);});

app.listen(4000, function() {
  console.log('Application running on port 4000.');
});
