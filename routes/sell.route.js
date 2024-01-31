const Router = require("express");
const {
  getSells,
  getByIdSell,
  createSell,
} = require("../controllers/sell.controller");

const router = Router();

router.get("/sells", getSells);
router.get("/sell/:id", getByIdSell);
router.post("/sell", createSell);

module.exports = router;
