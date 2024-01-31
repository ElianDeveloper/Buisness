const express = require("express");
const app = express();
const port = 3000;

const sequelize = require("./database/database.js");
const productRoutes = require('./routes/product.route.js');

//Import modules
require("./models/Product.js");
require("./models/Expense.js");
require("./models/Sell.js");

//Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(port, () => {
      console.log(`The application is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error when starting connection", error);
  }
}

main();
