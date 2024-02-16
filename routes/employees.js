import express from "express";

import {
    getEmployees, 
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
} from "../controllers/employeesController.js";

const router = express.Router();

router.get('/', getEmployees);
router.get('/:id', getEmployee);
router.post('/', createEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;