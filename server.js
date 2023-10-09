const connection = require('./src/database/database.js');
const server = require('./src/App.js');

connection.sync()
        .then(() => {
            console.log('Banco Conectado!')
            server.listen(3000, () => {
                console.log("running!");
            })
        })
        .catch((err) => {
            console.log("We have an error: ", err);
        })


