const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//import dotenv
const dotenv = require("dotenv").config();

//check enviroment
if (dotenv.error) {
  throw new Error(`Enviroment Variables - import error | ${dotenv.error}`);
}

//variable .env
const port = process.env.PORT;

//import sequilize
const sequelize = require("./database/database.js");

//Imports Routes
const productRoutes = require("./routes/product.route.js");
const expenseRoutes = require("./routes/expense.route.js");
const sellRoutes = require("./routes/sell.route.js");
const usersRoutes = require("./routes/users.route.js");

//Imports modules
require("./models/Product.js");
require("./models/Expense.js");
require("./models/Sell.js");
require("./models/Users.js");

//Middleware
const errorHandler = require("./middleware/errorHandler.js");
const authenticate = require("./middleware/authenticate.js");

//Add Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(errorHandler);
// app.use(authenticate);

// Routes
app.use("/api", usersRoutes);
app.use("/api", productRoutes);
app.use("/api", expenseRoutes);
app.use("/api", sellRoutes);

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      console.log(`The application is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error when starting connection", error);
  }
}

main();
