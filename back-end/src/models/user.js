import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


User.associate = (models) => {
    User.hasMany(models.Posts, {foreignKey:'userId'})
    User.hasMany(models.Comment,{foreignKey:'userId'})
}




export default User