const Sequelize = require('sequelize');

const connection = require('../database/database.js');

const Farm = require('./Farms.model.js');

const User = connection.define('users', {
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
    email: {
        type: Sequelize.CHAR(256),
        allowNull: false
    },
    username: {
        type: Sequelize.CHAR(32),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cellphone_number: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

(async () => {
    await connection.sync({alter: true});
});

module.exports = User;