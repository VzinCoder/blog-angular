import models from "../models/index.js"
import CustomError from "../util/CustomError.js"
const { Posts, Comment } = models

const create = async (req, res, next) => {
    try {
        const { content, postId } = req.body
        const post = await Posts.findByPk(postId)

        if (!post) {
            throw new CustomError('Post not found', 404)
        }

        const userId = req.userId
        const comment = await Comment.create({ content, postId, userId })
        res.status(201).json(comment)
    } catch (error) {
        next(error)
    }
}


const remove = async (req, res, next) => {
    try {
        const commentId = req.params.commentId
        const comment = await Comment.findByPk(commentId)

        if (!comment) {
            throw new CustomError('Comment not found', 404)
        }

        if(comment.userId !== req.userId){
            throw new CustomError('Unauthorized', 403)
        }

        await comment.destroy()
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const {content} = req.body
        const commentId = req.params.commentId
        const comment = await Comment.findByPk(commentId)

        if (!comment) {
            throw new CustomError('Comment not found', 404)
        }

        if(comment.userId !== req.userId){
            throw new CustomError('Unauthorized', 403)
        }

        await comment.update({content})
        res.status(200).json(comment)
    } catch (error) {
        next(error)
    }
}



export default { create, remove, update }