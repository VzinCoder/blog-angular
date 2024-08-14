import { body, param } from "express-validator"
import handleValidator from "../middleware/handleValidator.js"



const postIdChain = () => {
    return param('postId')
        .isInt().withMessage('The postId parameter must be a valid integer.')
}

const titleChain = () => {
    return body('title').trim().notEmpty().withMessage('Title is required')
}

const contentChain = () => {
    return body('content').trim().notEmpty().withMessage('Content is required')
}



export const createValidator = () => [
    titleChain(),
    contentChain(),
    handleValidator
]

export const updateValidator = () => [
    postIdChain(),
    titleChain(),
    contentChain(),
    handleValidator
]

export const removeValidator = () => [
    postIdChain(),
    handleValidator
]

export const findByIdValidator = () => [
    postIdChain(),
    handleValidator
]
