const Router = require("express");
const {
  getSells,
  getByIdSell,
  createSell,
  updateSell,
} = require("../controllers/sell.controller");

const router = Router();

router.get("/sells", getSells);
router.get("/sell/:id", getByIdSell);
router.post("/sell", createSell);
router.put("/sell/:id", updateSell);

module.exports = router;
