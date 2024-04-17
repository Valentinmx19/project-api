import { Router } from "express";
import * as semesterCont from "../controllers/semester";

const router = Router();

router.post("/semester", semesterCont.postSemester);

router.get("/semesters", semesterCont.getSemester);

router.get("/semester/:id", semesterCont.getSemesterById);

router.put("/semester/:id", semesterCont.updateSemester);

router.delete("/semester/:id", semesterCont.deleteSemester);

export default router;
