import { DataTypes } from "sequelize";
import sequelize from "../config/db";


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
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})




export default User