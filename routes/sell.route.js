const Router = require("express");
const { getSells, getByIdSell } = require("../controllers/sell.controller");

const router = Router();

router.get("/sells", getSells);
router.get("/sell/:id", getByIdSell);

module.exports = router;
