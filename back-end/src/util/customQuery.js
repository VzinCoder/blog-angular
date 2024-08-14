import models from "../models/index.js"

const { Comment, User } = models

const findBlog = {
    attributes: { exclude: ['userId'] },
    include: [
        {
            model: User,
            as: 'user',
            attributes: ['id', 'name']
        },
        {
            model: Comment,
            as: 'comments',
            attributes: { exclude: ['userId', 'postId'] },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name']
                }
            ]
        },
    ]
}

export default { findBlog }