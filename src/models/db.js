//conectarnos a través de sequelize
const { Sequelize } = require("sequelize");
require("dotenv").config();


const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);

module.exports = db;
