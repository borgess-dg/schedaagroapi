const farmRouter = require('express').Router();

const FarmsController = require('../controllers/Farms.controller.js');

farmRouter.post('/fazendas', FarmsController.createNewFarm);

module.exports = farmRouter;