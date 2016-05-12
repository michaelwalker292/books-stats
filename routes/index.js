var express = require('express');
var router = express.Router();

var db = require('../config/database')

var booksCollection = db.get('books')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/bookslist', function(req, res) {
  booksCollection.find({}).then(function(savedBooks) {
    res.json(savedBooks)
  })
})

module.exports = router;
