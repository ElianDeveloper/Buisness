const Router = require("express");
const { getProducts } = require("../controllers/product.controller.js");

const router = Router();

router.get("/products", getProducts);

module.exports = router;
