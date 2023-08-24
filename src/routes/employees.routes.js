import { Router } from "express";
import {getEmployees,createEmployees,actualEmployees, deleteEmployees,getEmployee } from "../controllers/employees.controller.js";
const router=Router()
router.get('/employeers',getEmployees)
router.get('/employeers/:id',getEmployee)
router.post('/employeers',createEmployees)
router.patch('/employeers/:id',actualEmployees)
router.delete('/employeers/:id',deleteEmployees)

export default router