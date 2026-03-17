var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistema de Jogo para Desenvolvimento do Raciocínio Lógico' });
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});

module.exports = router;
