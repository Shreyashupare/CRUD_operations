const db = require('../models');
const Employee = db.employee;
const redis_services = require('../redis_manager/redis_util.js');

const get_all_employees = async()=>{
    const key = "allEmployees";
    const data = await redis_services.getkeyvalue(key);
    if(data !== null){
        return data;
    }
    else{
        const employees = await Employee.findAll();
        redis_services.setkeyvalue(key, employees);
        return employees;
    }
}

const add_employee = (info)=>{
    Employee.create(info);
}

const get_one_employee = async(emp_id)=>{
    let employee = await Employee.findOne({
        where:{
            Emp_id: emp_id,
        }
    });
    return employee;
}

const update_employee_details = async(emp_id, details)=>{
    const {name, age } = details;
    const employee = await Employee.update(
        {
            name: name,
            age: age,
        },
        { where:{
            Emp_id: emp_id,
        }
        }
    );
}

const delete_employee = async(emp_id)=>{
    await Employee.destroy({
        where :{
            Emp_id: emp_id,
        },
    });
}
module.exports = {
    get_all_employees,
    add_employee,
    get_one_employee,
    update_employee_details,
    delete_employee
}