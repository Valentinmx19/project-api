import { Router } from "express";
import * as userCont from "../controllers/user";
import * as userMidd from "../middlewares/user";

const router = Router();

router.post('/user', [userMidd.getUsernameDuplicate, userMidd.getEmailDuplicate], userCont.postUser);

router.post('/user/sigin', userMidd.signIn);

router.get('/users', userCont.getUsers);

router.get('/user/:id', userCont.getUserId);

router.put('/user/:id', userCont.updateUser);

router.delete('/user/:id', userCont.deleteUser);

export default router;