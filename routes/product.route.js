const Router = require("express");
const {
  getProducts,
  getByIdProduct,
} = require("../controllers/product.controller.js");

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getByIdProduct);

module.exports = router;
