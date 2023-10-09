const express = require ('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

app.use(require('./routes/Farms.route.js'));
app.use(require('./routes/Users.route.js'));

module.exports = app;