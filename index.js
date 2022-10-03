// Importação do pacote "express" e transformando em uma const chamada "express"
const express = require('express');

// Importação do arquivo "routesCategoria" e transformando em uma const chamada "routesCategoria"
const routesCategoria = require('./route/routeCategoria')

// Transformando a const "express" em uma const chamada "app"
const app = express(); 

// "app" usando "/" (raiz) e da const "routesCategoria"
app.use('/', routesCategoria);

// "app" escutando a porta (3000) e devolve a resposta que está escutando
app.listen(3000, ()=>{
    console.log('O SERVIDOR ESTÁ LIGADO EM - http://localhost:3000');
});