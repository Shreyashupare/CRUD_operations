const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const ServerConfig = require('./employees/config/serverConfig.js');
const PORT = ServerConfig.PORT;

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = require('./employees/routes/server.routes.js')
app.use('/rebel/employees', router)

app.listen(PORT, () =>{
    console.log(`Server started at port ${PORT}`);
});