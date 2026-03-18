var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre o Express' });
});

/* GET contact page. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato - Express' });
});

module.exports = router;
