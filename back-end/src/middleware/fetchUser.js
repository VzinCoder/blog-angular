import models from "../models/index.js"

const { User } = models

const fetchUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.userId)
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

export default fetchUser