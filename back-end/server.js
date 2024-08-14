import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './src/config/db.js'
import handleError from './src/middleware/handleError.js'
import authRouter from './src/routes/authRoutes.js'
import postsRouter from './src/routes/postsRoutes.js'
import commentRouter from './src/routes/commentRoutes.js'

const app = express()

app.use(bodyParser.json())


app.use('/auth', authRouter)
app.use('/posts',postsRouter)
app.use('/comment',commentRouter)
app.use(handleError)


const initApp = async () => {
   await sequelize.sync({ alter:true })
   console.log('Database connected')
   app.listen(3000, err => console.log(err || 'Server on'))
}


initApp()




