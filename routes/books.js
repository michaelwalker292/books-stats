var express = require('express');
var router = express.Router();

var db = require('../config/database')

var booksCollection = db.get('books')

var statsD = require('node-statsd')
var client = new statsD({prefix: 'dev.books.'});

/* GET users listing. */
router.get('/', function(req, res, next) {
  client.increment('book.page.hit')
  res.render('books');
});

router.post('/', function(req, res, next) {
  booksCollection.insert(req.body).then(function(insertedBook){
    client.increment('book.page.post')
    res.render('index')
  })
});

module.exports = router;
