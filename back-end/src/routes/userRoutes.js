import { Router } from "express";
import userController from "../controller/userController.js";
import verifyToken from "../middleware/verifyToken.js";
import { findProfileValidator } from "../validator/userValidator.js";

const router = Router()

router.get('/', verifyToken, userController.getUserInfo)
router.get('/profile/:userId', findProfileValidator(), userController.findProfile)

export default router