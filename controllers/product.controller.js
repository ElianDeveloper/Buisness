const Product = require("../models/Product.js");

//get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//get product by id
const getByIdProduct = async (req, res) => {};

//creating a product
const createProduct = async (req, res) => {};

//updating product
const updateProduct = async (req, res) => {};

//delete product
const deleteProduct = async (req, res) => {};

module.exports = { getProducts };
