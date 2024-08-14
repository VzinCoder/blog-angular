import { DataTypes } from "sequelize"
import sequelize from "../config/db.js"


const Comment = sequelize.define('comment',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    content: {
        type:DataTypes.STRING,
        allowNull:false,
    }
})

Comment.associate = (models) => {
    Comment.belongsTo(models.Posts,{foreignKey:'postId'})
    Comment.belongsTo(models.User,{foreignKey:'userId'})
}


export default Comment