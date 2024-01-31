const Router = require("express");
const { getSells } = require("../controllers/sell.controller");

const router = Router();

router.get("/sells", getSells);

module.exports = router;
