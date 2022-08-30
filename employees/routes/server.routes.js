
const employeeController = require('../controllers/employee');
const router = require('express').Router();


router.get('/allEmployees', employeeController.findEmployees)

router.get('/:id', employeeController.findEmployee)

router.put('/:id', employeeController.updateEmployee)

router.delete('/:id', employeeController.deleteEmployee)

router.post('/addEmployee', employeeController.addEmployee)

module.exports = router
