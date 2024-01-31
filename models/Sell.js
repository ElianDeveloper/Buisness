const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Sell = sequelize.define(
  "sell",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    tableName: "sell",
  }
);

module.exports = Sell;
