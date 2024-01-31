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
const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "product does not exist" });
    }

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//creating a product
const createProduct = async (req, res) => {
  const { name, description, price, amount } = req.body;

  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      amount,
    });

    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//updating product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, amount } = req.body;

    const product = await Product.findByPk(id);
    product.name = name;
    product.description = description;
    product.price = price;
    product.amount = amount;

    await product.save();

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete product
const deleteProduct = async (req, res) => {};

module.exports = {
  getProducts,
  getByIdProduct,
  createProduct,
  updateProduct,
};
