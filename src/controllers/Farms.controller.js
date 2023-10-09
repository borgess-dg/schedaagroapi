const FarmsRepository = require('../repositories/Farms.repository.js');
class FarmsController{
    async createNewFarm(req, res){
        const { name, latitude, longitude, totalArea} = req.body

        const farmData = {
            name: String(name),
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            totalArea: parseFloat(totalArea)
        }
        try{
            await FarmsRepository.createNewFarm(farmData);
            return res.sendStatus(200);
        }
        catch (error){
            return res.sendStatus(300)
        }
    }
}

module.exports = new FarmsController