const Sequelize = require("sequelize");
require("dotenv").config();

//variable env
const database = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "postgres",
});

module.exports = sequelize;
