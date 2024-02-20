const winston = require("winston");

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

module.exports = logger;
