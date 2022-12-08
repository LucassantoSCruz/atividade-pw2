const sequelize = require('sequelize');

const connection = require('../database/database');

const modelMarca = connection.define(
    'tbl_marca', 
    {
        cod_marca:{
            type: sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        nome_marca:{
            type: sequelize.STRING(50), 
            allowNull: false 
        }
    }
);

//modelMarca.sync({force:true});

module.exports = modelMarca;