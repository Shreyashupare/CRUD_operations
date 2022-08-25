require('dotenv').config();
const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const bodyParser = require('body-parser')
const PORT = 3000;

const USER = process.env.user_db;
const PASS = process.env.pass;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const sequelize = new Sequelize("Rebel", `${USER}`, `${PASS}`, {
    dialect: "mysql",
});
//establish conection with database
sequelize.authenticate().then(()=>{
    console.log("Connection with database established")
}).catch((err)=>{
    console.log(err)
})

//create table
const Employee = sequelize.define('Employee',{
    Emp_id:Sequelize.INTEGER,
    name:Sequelize.STRING,
    age:Sequelize.INTEGER,
});
//create model
sequelize.sync();

//findAll
app.get('/',async(req, res) =>{
    const findAll = await Employee.findAll();
    res.send(findAll);
});

app.post('/',async(req, res)=>{
    const Emp_id=req.body.Emp_id;
    const name=req.body.name;
    const age=req.body.age;
    const insertEmp = Employee.build({
        Emp_id,
        name,
        age,
    });
    await insertEmp.save();
    res.send('Employee added successfully');
    console.log("Employee added successfully");
})

app.listen(PORT, () =>{
    console.log(`Server started at port ${PORT}`)
    // console.log(`user is ${USER}`)
});