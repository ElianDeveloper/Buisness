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

module.exports = {
  getSells,
  getByIdSell,
};
