const Router = require("express");
const {
  getExpenses,
  getByIdExpense,
  createExpense,
} = require("../controllers/expense.controller");

const router = Router();

router.get("/expenses", getExpenses);
router.get("/expense/:id", getByIdExpense);
router.post("/expense", createExpense);

module.exports = router;
