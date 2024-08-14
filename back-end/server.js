import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './src/config/db.js'
import handleError from './src/middleware/handleError.js'
import authRouter from './src/routes/authRoutes.js'
import postsRouter from './src/routes/postsRoutes.js'
import commentRouter from './src/routes/commentRoutes.js'
import userRouter from './src/routes/userRoutes.js'
import { routeNotFound } from './src/middleware/routeNotFound.js'

const app = express()

app.use(bodyParser.json())


app.use('/auth', authRouter)
app.use('/posts',postsRouter)
app.use('/comment',commentRouter)
app.use('/user',userRouter)
app.use(routeNotFound)
app.use(handleError)



const initApp = async () => {
   await sequelize.sync({ alter:true })
   console.log('Database connected')
   app.listen(3000, err => console.log(err || 'Server on'))
}


initApp()




