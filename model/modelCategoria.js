// importação do pacote "sequelize" e transformando em uma const "sequelize"
const sequelize = require('sequelize');

// importação do arquivo "database"
const connection = require('../database/database');

// 
const modelCategoria = connection.define(
    'tbl_categoria', // nome da tabela
    {
        cod_categoria:{ // nome do campo
            type: sequelize.INTEGER, // tipo do dado do campo
            primaryKey: true, // regra do campo
            autoIncrement: true // regra do campo
        },
        nome_categoria:{
            type: sequelize.STRING(50), // tipo do dado do campo
            allowNull: false // regra do campo
        }
    }
);

modelCategoria.sync({force:true});

module.exports = modelCategoria;