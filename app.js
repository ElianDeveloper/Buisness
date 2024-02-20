const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const winston = require("winston");

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

//Imports modules
require("./models/Product.js");
require("./models/Expense.js");
require("./models/Sell.js");

//Configuracion del logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "registro.log" }),
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

logger.info("Registro de informacion");
logger.warn("Advertencia: algo podria estar mal");
logger.error("Error: algo salio mal");

//Middleware
function errorHandler(err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send("¡Algo salio mal!");
}

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

// Routes
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
