import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
    const secretKey = 'vzincoder' 
    const token = jwt.sign({ id: userId }, secretKey, { expiresIn: '1h' })
    return token
}

export default generateToken