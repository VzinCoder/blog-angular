import models from "../models/index.js"

const { Comment, User, Posts } = models


const findProfile = {
    attributes: ['id', 'name'],
    include: [
        {
            model: Posts,
            include: [
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['id', 'name'],
                        }
                    ]
                }
            ],
        }
    ]
}


const getUserInfo = {attributes: ['id', 'name', 'email']}



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

export default { findBlog, findProfile,getUserInfo }