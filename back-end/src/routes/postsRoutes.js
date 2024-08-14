import { Router } from "express";
import verifyToken from '../middleware/verifyToken.js'
import postsController from "../controller/postsController.js";
import { createValidator, removeValidator, updateValidator, findByIdValidator } from "../validator/postsValidator.js";

const router = Router()

router.post('/', verifyToken, createValidator(), postsController.create)
router.put('/:postId', verifyToken, updateValidator(), postsController.update)
router.delete('/:postId', verifyToken, removeValidator(), postsController.remove)
router.get('/:postId', findByIdValidator(), postsController.findById)
router.get('/', postsController.findAll)


export default router