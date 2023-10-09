const Users = require('../models/Users.model.js');
const Farm = require('../models/Users.model.js');

class UsersRepository{
    async createUser(userData){

        const originFarm = Users.belongsTo(Farm, { as: 'farm' });

        try{
            await Users.create(userData, {
                include: [originFarm]
            });
        }
        catch (err){
            console.log(err);
        }
    }
}

module.exports = new UsersRepository();