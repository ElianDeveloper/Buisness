const Router = require("express");
const {
  getExpenses,
  getByIdExpense,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expense.controller");

const router = Router();

router.get("/expenses", getExpenses);
router.get("/expense/:id", getByIdExpense);
router.post("/expense", createExpense);
router.put("/expense/:id", updateExpense);
router.delete("/expense/:id", deleteExpense);

module.exports = router;
