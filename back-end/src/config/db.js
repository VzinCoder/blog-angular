import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: "mysql",
    database: 'blog',
    username:'vzincoder',
    password: '12345678',
    port: 3306,
});


export default sequelize