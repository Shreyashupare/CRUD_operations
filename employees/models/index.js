
const dbConfig = require('../config/dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASS,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    }
);

sequelize.authenticate()
.then(()=>{
    console.log(`Connection with '${dbConfig.DB}' database established`);
}).catch((err)=>{
    console.log('Error ' + err);
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.employee = require('./employee.js')(sequelize, DataTypes)


sequelize.sync();

module.exports = db