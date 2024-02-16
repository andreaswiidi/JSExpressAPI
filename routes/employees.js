const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController.js');

router.route('/')
    .get(employeesController.getEmployees)
    .post(employeesController.createEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;