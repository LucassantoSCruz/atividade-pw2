const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Se você chegou até aqui, significa que está funcionando!');
});
app.listen(3000, ()=>{
    console.log('O SERVIDOR ESTÁ LIGADO.');
});