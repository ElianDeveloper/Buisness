const express = require("express");
const sequelize = require("./database/database.js");

const app = express();
const port = 3000;

//Middleware
app.use(express.json());

async function main() {
  try {
    await sequelize.authenticate();
    app.listen(port, () => {
      console.log(`The application is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error when starting connection", error);
  }
}

main();
