const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASS: process.env.PASS,
    DB: 'Rebel',
    dialect: 'mysql'
}