const Sell = require("../models/Sell");

//get all sell
const getSells = async (req, res) => {
  try {
    const sells = await Sell.findAll();
    res.json(sells);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//get sell by id
const getByIdSell = async (req, res) => {
  try {
    const { id } = req.params;

    const sell = await Sell.findOne({
      where: {
        id,
      },
    });

    if (!sell) {
      return res.status(404).json({ message: "sell does not exist" });
    }

    res.json(sell);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//creating a Sell
const createSell = async (req, res) => {
  const { date, amount, category, product_id } = req.body;

  try {
    const newSell = await Sell.create({
      date,
      amount,
      category,
      product_id,
    });

    res.json(newSell);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//updating sell
const updateSell = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, amount, category, product_id } = req.body;

    const sell = await Sell.findByPk(id);
    sell.date = date;
    sell.amount = amount;
    sell.category = category;
    sell.product_id = product_id;

    await sell.save();

    res.json(sell);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete Sell
const deleteSell = async (req, res) => {
  try {
    const { id } = req.params;

    await Sell.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSells,
  getByIdSell,
  createSell,
  updateSell,
  deleteSell,
};
