const Sequelize = require("sequelize");

const sequelize = new Sequelize("dbbuisness", "postgres", "010103", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
