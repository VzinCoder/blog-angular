import jwt from 'jsonwebtoken'
import CustomError from '../util/CustomError.js'

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return next(new CustomError("Access denied", 401))
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'vzincoder')
        req.userId = decoded.id
        next()
    } catch (error) {
        next(new CustomError('Invalid token', 401))
    }
}

export default verifyToken