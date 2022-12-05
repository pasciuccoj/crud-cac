// conectamos a la base de datos

const mysql = require("mysql");

// dotenv
require("dotenv").config();


// estos datos aparecen en administrador de sesiones de HeidiSQL. Los reemplazamos por las variables dinámicas para no exponer datos sensibles.
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

connection.connect(); 
module.exports = connection;

// ahora podemos usar connection cada vez que necesitemos acceder a la BBDD

