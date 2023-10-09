const Sequelize = require('sequelize');

const connection = new Sequelize('schedaagro', 'postgres', '159753', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
});

module.exports = connection;