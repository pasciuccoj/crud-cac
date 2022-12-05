// modelo para trabajar los datos en la BBDD

const db = require("./db");
const { DataTypes } = require("sequelize");

const PostModel = db.define("posts", {
  titulo: {
    type: DataTypes.STRING,
  },
});

module.exports = PostModel;