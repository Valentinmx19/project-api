import { Router } from "express";
import * as departmentCont from "../controllers/department";

const router = Router();

router.post('/department', departmentCont.postDepartment);

router.get('/departments', departmentCont.getDepartment);

router.get('/departments/:id', departmentCont.getDepartmentById);

router.put('/department/:id', departmentCont.updateDepartment);

router.delete('/department/:id', departmentCont.deleteDepartmetn);

export default router;