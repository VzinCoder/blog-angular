import express from 'express'
import authRouter from './src/routes/authRoutes.js'
import sequelize from './src/config/db.js'

const app = express()

app.use('/auth', authRouter)


const initApp = async () => {
   await sequelize.sync({ force: true })
   console.log('Database connected')
   app.listen(3000, err => console.log(err || 'Server on'))
} 


initApp()




