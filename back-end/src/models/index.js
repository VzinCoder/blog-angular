import Posts from "./posts.js";
import Comment from "./comment.js";
import User from "./user.js";

const models = {
    Posts,
    Comment,
    User
}

Object.values(models).forEach(model => model.associate(models))


export default models