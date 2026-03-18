var express = require('express');
var router = express.Router();

/* GET produtos listing. */
router.get('/', function(req, res, next) {
  const produtos = [
    {id: 1, nome: 'Controle Remoto', descricao: 'Controle para TV', preco: 50.00 },
    {id: 2, nome: 'Controle de Jogo', descricao: 'Controle para videogame', preco: 100.00 },
    {id: 3, nome: 'Controle de Volume', descricao: 'Controle para áudio', preco: 30.00 },
    {id: 4, nome: 'Controle Inteligente', descricao: 'Controle smart home', preco: 150.00 }
  ];
  res.render('produtos', { produtos });
});

module.exports = router;