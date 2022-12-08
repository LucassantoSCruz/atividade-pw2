const sequelize = require('sequelize');

const connection = new sequelize(
        'bd_loja_cosmeticos_e_perfumaria',
        'root', 
        '', 
        {
            host:'localhost',
            dialect:'mysql',
            timezone:'-03:00'
        }
);

module.exports = connection;