import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const Posts = sequelize.define('posts',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    content:{
        type: DataTypes.STRING,
        allowNull:false
    }
})


Posts.associate = (models) => {
    Posts.belongsTo(models.User, {foreignKey:'userId'})
    Posts.hasMany(models.Comment,{foreignKey:'postId'})
}

export default Posts

