const Router = require("express");
const {
  getExpenses,
  getByIdExpense,
  createExpense,
  updateExpense,
} = require("../controllers/expense.controller");

const router = Router();

router.get("/expenses", getExpenses);
router.get("/expense/:id", getByIdExpense);
router.post("/expense", createExpense);
router.put("/expense/:id", updateExpense);

module.exports = router;
