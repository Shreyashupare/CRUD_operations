const db = require('../models');

const Employee = db.employee;
const helper = require('../helpers/api_services.js');


const addEmployee = async(req, res)=>{
    let detaiils = {
        Emp_id: req.body.Emp_id,
        name: req.body.name,
        age: req.body.age
    }

    try{
        await helper.add_employee(detaiils)
        res.statusCode = 200;
        res.send('Employee added successfully');
    }catch(err){
        res.statusCode = 500;
        res.send('Employee Not added. Error : '+ err);
    }
}

//Get All Employees data
const findEmployees = async(req, res)=>{
    try{
        const employees = await helper.get_all_employees();
        res.statusCode = 200;
        res.send(employees);
    }
    catch(err){
        res.statusCode = 500;
        res.send('Error : '+err);
    }
}

const findEmployee = async(req, res)=>{
    try{
        const employee = await helper.get_one_employee(req.params.id);
        res.statusCode = 200;
        res.send('Employee with id ' +req.params.id + ': ' + JSON.stringify(employee));
        // res.send(employee);
    }
    catch(err){
        res.statusCode = 500;
        res.send('Error: '+err);
    }
}

const updateEmployee = async(req, res)=>{
    let Emp_id=req.body.Emp_id ;
    let info = {
        name: req.body.name,
        age: req.body.age,
    }
    try{
        const employee = await helper.update_employee_details(Emp_id, info);
        res.statusCode = 200;
        res.send(`Employee Details updated successfully`);
    }
    catch(err){
        console.log(err)
        res.statusCode = 500;
        res.send('Error : '+err);
    }
}

const deleteEmployee = async(req, res)=>{
    let id = req.params.id;
    try{
        let employee = await helper.delete_employee(id);
        res.send(`Employee with id ${id} deleted successfully`);
        
    }
    catch(err){
        res.statusCode = 500;
        res.send('Error : '+err);
    }
}

module.exports = {
    addEmployee,
    findEmployees,
    findEmployee,
    updateEmployee,
    deleteEmployee
}