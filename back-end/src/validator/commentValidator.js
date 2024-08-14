import { body, param } from "express-validator";
import handleValidator from "../middleware/handleValidator.js";


const contentChain = () => {
    return body('content').trim().notEmpty().withMessage('Content is Required')
}

const postIdChain = () => {
    return body('postId')
        .isInt().withMessage('The postId parameter must be a valid integer.')
}

const commentIdChain = ()=> {
    return param('commentId')
        .isInt().withMessage('The commentId parameter must be a valid integer.')
}


export const createValidator = () => [
    postIdChain(),
    contentChain(),
    handleValidator
]

export const removeValidator = () => [
    commentIdChain(),
    handleValidator
]

export const updateValidator = () => [
    commentIdChain(),
    contentChain(),
    handleValidator,
]