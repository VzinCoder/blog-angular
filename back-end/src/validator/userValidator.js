import { param } from "express-validator"
import handleValidator from "../middleware/handleValidator.js"


const userIdChain = () => {
    return param('userId')
    .isInt().withMessage('The userId parameter must be a valid integer.')
}


export const findProfileValidator = () => [
    userIdChain(),
    handleValidator
]