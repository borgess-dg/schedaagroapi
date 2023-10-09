const Farms = require('../models/Farms.model.js')

class FarmsRepository{
    async createNewFarm(farmData){
        try{
            await Farms.create(farmData)
        }
        catch (err){
            console.log("Error!");
        }
    }
}

module.exports = new FarmsRepository();