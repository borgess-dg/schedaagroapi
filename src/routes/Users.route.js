const userRoutes = require('express').Router();

const UsersController = require('../controllers/Users.controller.js');

userRoutes.post('/usuarios', UsersController.createUser);

module.exports = userRoutes;