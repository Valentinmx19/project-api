import { Router } from "express";
import * as groupCont from "../controllers/group";

const router = Router();

router.post("/group", groupCont.postGroup);

router.get("/groups", groupCont.getGroup);

router.get("/group/:id", groupCont.getGroupById);

router.put("/group/:id", groupCont.updateGroup);

router.delete("/group/:id", groupCont.deleteGroup);

export default router;