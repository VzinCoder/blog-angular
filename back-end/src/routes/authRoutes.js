import { Router } from "express";
import authController from "../controller/authController.js";
import { loginValidator, registerValidator } from "../validator/authValidator.js";

const router = Router()

router.post('/register', registerValidator(), authController.register)
router.post('/login', loginValidator(), authController.login)


export default router