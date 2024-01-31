const Router = require("express");
const { getExpenses } = require("../controllers/expense.controller");

const router = Router();

router.get("/expenses", getExpenses);

module.exports = router;
