const Router = require("express");
const {
  getExpenses,
  getByIdExpense,
} = require("../controllers/expense.controller");

const router = Router();

router.get("/expenses", getExpenses);
router.get("/expense/:id", getByIdExpense);

module.exports = router;
