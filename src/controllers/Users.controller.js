const bcrypt = require('bcryptjs');
const UsersRepository = require('../repositories/Users.repository.js');

class UsersController{
    async createUser(req, res){
        
        const {name, username, email, password, cellphone_number} = req.body;

        const userData = {
            name: String(name),
            email: String(email),
            username: String(username),
            password: bcrypt.hashSync(password, 10),
            cellphone_number: String(cellphone_number)
        }


        await UsersRepository.createUser(userData);

        return res.sendStatus(200);
    }
}

module.exports = new UsersController();