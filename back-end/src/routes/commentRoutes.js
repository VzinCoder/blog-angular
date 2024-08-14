import { Router} from "express";
import verifyToken from '../middleware/verifyToken.js'
import commentController from "../controller/commentController.js";
import { createValidator,removeValidator,updateValidator } from "../validator/commentValidator.js";

const router = Router()


router.post('/',verifyToken,createValidator(),commentController.create)
router.delete('/:commentId',verifyToken,removeValidator(),commentController.remove)
router.put('/:commentId',verifyToken,updateValidator(),commentController.update)

export default router