const express = require('express');

const modelCategoria = require('../model/modelCategoria');

const router = express.router();

router.post('/cadastrarCategoria', (req, res)=>{
    res.send('ROTA DE CADASTRO DE CATEGORIA!');
});

router.get('/listarCategoria', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE CATEGORIA!');
});

router.put('/alterarCategoria', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE CATEGORIA!');
});

router.delete('/excluirCategoria', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO DE CATEGORIA!');
});

module.exports = router;