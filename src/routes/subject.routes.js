import { Router } from "express";
import * as subjectCont from "../controllers/subject";

const router = Router();

router.post("/subject", subjectCont.postSubject);

router.get("/subjects", subjectCont.getSubject);

router.get("/subject/:id", subjectCont.getSubjectById);

router.put("/subject/:id", subjectCont.updateSubject);

router.delete("/subject/:id", subjectCont.deleteSubjetc);

export default router;