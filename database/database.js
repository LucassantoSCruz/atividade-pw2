// importação do pacote "sequelize" e transformando em uma const "sequelize"
const sequelize = require('sequelize'); 

// transfomando a const "sequelize" em uma const "connection"
const connection = new sequelize(
    'bd_loja_c&p', // nome do banco
    'root', // usuário do banco
    '', // senha do banco
    {
        host:'localhost', // o local onde o banco está sendo executado
        dialect:'mysql', // tipo de banco
        timezone:'-03:00' // definição do fuso horário
    }
);

// exportação da const "connection"
module.exports = connection;