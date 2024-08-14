import { body } from 'express-validator';
import handleValidator from '../middleware/handleValidator.js';

const emailChain = () => {
    return body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format');
}

const passwordChain = () => {
    return body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isString().withMessage('Password must be a string')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
}

const nameChain = () => {
    return body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long')
}


export const loginValidator = () => [
    emailChain(),
    passwordChain(),
    handleValidator
]

export const registerValidator = () => [
    emailChain(),
    passwordChain(),
    nameChain(),
    handleValidator
]




