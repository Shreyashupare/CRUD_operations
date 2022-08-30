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


module.exports = {
    get_all_employees
}