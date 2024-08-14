import models from '../models/index.js'
import bcrypt from 'bcrypt'
import CustomError from "../util/CustomError.js"
import generateToken from '../util/generateToken.js'


const { User } = models

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        const userFound = await User.findOne({ where: { email } })

        if (userFound) {
            throw new CustomError('User already exists', 400)
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({ name, email, password: hashedPassword })

        res.status(201).json({ msg: "User registered successfully" })
    } catch (error) {

        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body


        const userFound = await User.findOne({ where: { email } })

        if (!userFound) {
            throw new CustomError('User Not exists', 400)
        }

        const isEqual = await bcrypt.compare(password, userFound.password)

        if (!isEqual) {
            throw new CustomError('Invalid password', 400)
        }

        const token = generateToken(userFound.id)

        res.status(200).json(token)
    } catch (error) {
        next(error)
    }
}




export default { register, login }