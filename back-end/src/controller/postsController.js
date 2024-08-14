import models from '../models/index.js'
import CustomError from '../util/CustomError.js'
import options from '../util/customQuery.js'


const { Posts} = models


const create = async (req, res, next) => {
    try {
        const { title, content } = req.body
        const userId = req.userId
        const post = await Posts.create({ title, content, userId })
        res.status(201).json(post)
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const postId = req.params.postId
        const userId = req.userId
        const post = await Posts.findByPk(postId)

        if (!post) {
            throw new CustomError('Post not found', 404)
        }

        if (post.userId !== userId) {
            throw new CustomError('Unauthorized', 403)
        }

        await post.destroy()
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const postId = req.params.postId
        const userId = req.userId
        const { title, content } = req.body
        const post = await Posts.findByPk(postId)

        if (!post) {
            throw new CustomError('Post not found', 404)
        }

        if (post.userId !== userId) {
            throw new CustomError('Unauthorized', 403)
        }


        await post.update({ title, content })
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}

const findById = async (req,res,next) => {
    try {
        const {findBlog} = options
        const postId = req.params.postId
        const post =  await Posts.findByPk(postId,findBlog)

        if (!post) {
            throw new CustomError('Post not found', 404)
        }

        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}

const findAll = async (req, res, next) => {
    try {
        const {findBlog} = options
        console.log(findBlog)
        const posts = await Posts.findAll(findBlog)
        res.status(200).json(posts)
    } catch (error) {
        next(error)
    }
}



export default { create, findAll, update,remove ,findById}