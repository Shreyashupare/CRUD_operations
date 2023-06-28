
const employeeController = require('../controllers/employee');
const router = require('express').Router();
const add_validator = require('../validator/employee_validations/addEmployeeValidator.js');

router.get('/allEmployees', employeeController.findEmployees)

router.get('/:id', employeeController.findEmployee)

router.put('/:id', employeeController.updateEmployee)

router.delete('/:id', employeeController.deleteEmployee)

router.post('/upsert', employeeController.upsertEmployee)

router.post('/addEmployee', add_validator ,employeeController.addEmployee)

module.exports = router
