import models from "../models/index.js"
import CustomError from "../util/CustomError.js"
import options from '../util/customQuery.js'

const { User } = models


const findProfile = async (req, res, next) => {
    try {
        const { findProfile } = options
        const userId = req.params.userId

        const user = await User.findByPk(userId, findProfile)

        if (!user) {
            throw new CustomError("User not found", 404)
        }

        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


const getUserInfo = async (req, res, next) => {
    try {
        const { getUserInfo } = options
        const userId = req.userId

        const user = await User.findByPk(userId, getUserInfo)

        if (!user) {
            throw new CustomError("User not found", 404)
        }

        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export default { findProfile, getUserInfo }