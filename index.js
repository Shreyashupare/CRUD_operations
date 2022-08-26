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
    Emp_id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
    },
    name:Sequelize.STRING,
    age:Sequelize.INTEGER,
});
//create model
sequelize.sync();

//findAll
app.get('/findAll',async(req, res) =>{
    try{
        const findAll = await Employee.findAll();
        res.send(findAll);
    }
    catch(err)
    {
        res.send('Error : '+err);
    }    
});
//find by id
app.get('/findbyId/:id', async(req, res)=>{
    try{
        const user = await Employee.findOne({
            where:{
                Emp_id: req.params.id,
            }
        });
        res.send(user);
    }
    catch(err){
        res.send('Error: '+err);
    }
});

app.post('/add',async(req, res)=>{
    const Emp_id=req.body.Emp_id;
    const name=req.body.name;
    const age=req.body.age;
    const insertEmp = Employee.build({
        Emp_id,
        name,
        age,
    });
    try{
        await insertEmp.save();
        res.statusCode = 200;
        res.send('Employee added successfully');
    }catch(err){
        res.send('Employee Not added. Error : '+ err);
    }
    // console.log("Employee added successfully");
})

//update data

app.put('/update',(req, res)=>{
    const Emp_id=req.body.Emp_id;
    const name=req.body.name;
    const age=req.body.age;
    try{
        Employee.update(
            {
                name: name,
                age: age,
            },
            { where:{
                Emp_id: Emp_id,
            }
            }
        );
        res.send('Employee details updated successfully');
    }
    catch(err){
        res.send('Error : '+err);
    }
});
//delete by id
app.delete('/delete/:id', (req, res)=>{
    const id = req.params.id;
    try{
        Employee.destroy({
            where :{
                Emp_id: id,
            },
        });
        res.send(`Employee with id ${id} deleted successfully`);
    }
    catch(err){
        res.send('Error : '+err);
    }
});

app.listen(PORT, () =>{
    console.log(`Server started at port ${PORT}`)
    // console.log(`user is ${USER}`)
});