const Router = require("express");
const {
  getProducts,
  getByIdProduct,
  createProduct,
  updateProduct,
} = require("../controllers/product.controller.js");

const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getByIdProduct);
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);

module.exports = router;
