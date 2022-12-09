const sequelize = require('sequelize');

const connection = require('../database/database');

const modelFornecedor = connection.define(
    'tbl_fornecedor', 
    {
        cod_fornecedor:{
            type: sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        nome_fornecedor:{
            type: sequelize.STRING(50), 
            allowNull: false 
        },
        tel_fornecedor:{
            type: sequelize.STRING(11),
        },
        email_fornecedor:{
            type: sequelize.STRING(50)
        }
    }
);

//modelFornecedor.sync({force:true});

module.exports = modelFornecedor;