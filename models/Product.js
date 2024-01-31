const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Sell = require("./Sell.js");
const Expense = require("./Expense.js");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    timestamps: false,
    tableName: "product",
  }
);

//Relationship Sell
Product.hasMany(Sell, {
  foreignKey: "product_id",
  sourceKey: "id",
});

Sell.belongsTo(Product, {
  foreignKey: "product_id",
  targetId: "id",
});

//Relationship Expense
Product.hasMany(Expense, {
  foreignKey: "product_id",
  sourceKey: "id",
});

Expense.belongsTo(Product, {
  foreignKey: "product_id",
  targetId: "id",
});

module.exports = Product;
