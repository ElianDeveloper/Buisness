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



module.exports = {
  getSells,
};
