import express from 'express'
import bodyParser from 'body-parser'
import authRouter from './src/routes/authRoutes.js'
import sequelize from './src/config/db.js'
import handleError from './src/middleware/handleError.js'

const app = express()

app.use(bodyParser.json())
app.use('/auth', authRouter)
app.use(handleError)


const initApp = async () => {
   await sequelize.sync({ force: true })
   console.log('Database connected')
   app.listen(3000, err => console.log(err || 'Server on'))
} 


initApp()




