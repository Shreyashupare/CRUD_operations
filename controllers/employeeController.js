const db = require('../models');

const Employee = db.employee;



const addEmployee = async(req, res)=>{
    let detaiils = {
        Emp_id: req.body.Emp_id,
        name: req.body.name,
        age: req.body.age
    }
    
    try{
        let employee = await Employee.create(detaiils)
        res.statusCode = 200;
        res.send('Employee added successfully');
    }catch(err){
        res.send('Employee Not added. Error : '+ err);
    }
}

const findEmployees = async(req, res)=>{
    try{
        console.log("insdie finadall 0")
        const employees = await Employee.findAll();
        console.log("inside find all 1")
        res.statusCode = 200;
        res.send('Employees of Rebel :\n' + JSON.stringify(employees));
        console.log("inside findall 2")
    }
    catch(err)
    {
        res.send('Error : '+err);
    } 
}

const findEmployee = async(req, res)=>{
    try{
        let employee = await Employee.findOne({
            where:{
                Emp_id: req.params.id,
            }
        });
        res.statusCode = 200;
        res.send('Employee with id ' +req.params.id + ': ' + JSON.stringify(employee));
        // res.send(employee);
    }
    catch(err){
        res.send('Error: '+err);
    }
}

const updateEmployee = async(req, res)=>{
    let Emp_id=req.body.Emp_id ;
    let name=req.body.name;
    let age=req.body.age;
    try{
        const employee = await Employee.update(
            {
                name: name,
                age: age,
            },
            { where:{
                Emp_id: Emp_id,
            }
            }
        );
        res.statusCode = 200;
        res.send(`Employee Details updated successfully`);
    }
    catch(err){
        res.send('Error : '+err);
    }
}

const deleteEmployee = async(req, res)=>{
    let id = req.params.id;
    try{
        let employee = await Employee.destroy({
            where :{
                Emp_id: id,
            },
        });
        res.send(`Employee with id ${id} deleted successfully`);
        
    }
    catch(err){
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