const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const Farm = connection.define('farms', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    totalArea: {
        type: Sequelize.FLOAT,
        allowNull: true
    }
});

(async () => {
    await connection.sync({ alter: true });
})

module.exports = Farm;