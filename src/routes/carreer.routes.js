import { Router } from "express";
import * as CarreerCont from "../controllers/carreer";

const router =Router();

router.post("/carreer", CarreerCont.postCarreer);

router.get("/carreers", CarreerCont.getCarreer);
    
router.get("/carreers/:id", CarreerCont.getCarreerId);

router.put("/carreer/:id", CarreerCont.updateCarreer);

router.delete("/carreer/:id", CarreerCont.deleteCarreer);

export default router;