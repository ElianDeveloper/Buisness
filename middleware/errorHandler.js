const logger = require("../logger/logger");

//Middleware
function errorHandler(err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send("¡Algo salio mal!");
}

module.exports = errorHandler;
