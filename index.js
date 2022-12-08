const express = require('express');

const routeCategoria = require('./route/routeCategoria')

const routeMarca = require('./route/routeMarca')

const app = express();

app.use(express.json());

app.use('/', routeCategoria);

app.use('/', routeMarca)

app.listen(3000, ()=>{
    console.log('O SERVIDOR ESTÁ LIGADO EM - http://localhost:3000')
});