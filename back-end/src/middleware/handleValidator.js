import { validationResult } from "express-validator"
import CustomError from "../util/CustomError.js"

const handleValidator = (req,res,next) => {
    const result = validationResult(req)

    if(result.isEmpty()){
        return next()
    }
    
    const [error] = result.array()
    throw new CustomError(error.msg,400)
}


export default handleValidator