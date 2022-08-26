const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const Employee = sequelize.define('Employee',{
        Emp_id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
        },
        name:DataTypes.STRING,
        age:DataTypes.INTEGER,
    });
    return Employee
}