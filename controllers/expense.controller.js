const Expense = require("../models/Expense");

//get all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//get expense by id
const getByIdExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findOne({
      where: {
        id,
      },
    });

    if (!expense) {
      return res.status(404).json({ message: "expense does not exist" });
    }

    res.json(expense);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//creating a Expense
const createExpense = async (req, res) => {
  const { date, amount, category, product_id } = req.body;

  try {
    const newExpense = await Expense.create({
      date,
      amount,
      category,
      product_id,
    });

    res.json(newExpense);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExpenses,
  getByIdExpense,
  createExpense,
};
