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


module.exports = logger;
