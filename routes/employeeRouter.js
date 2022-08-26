
const employeeController = require('../controllers/employeeController');
const router = require('express').Router();



router.get('/allEmployees', employeeController.findEmployees)

router.get('/:id', employeeController.findEmployee)

router.put('/:id', employeeController.updateEmployee)

router.delete('/:id', employeeController.deleteEmployee)

router.post('/addEmployee', employeeController.addEmployee)

module.exports = router

// module.exports = (app) =>{
//     app.router('/:id').get(employeeController.findOne)

//     app.router('/:id').delete(employeeController.deleteEmployee)

//     app.router('/:id').put(employeeController.updateEmployee)

//     app.router('/allEmployees').get(employeeController.findAll)

//     app.router('/addEmployee').get(employeeController.addEmployee)

// }