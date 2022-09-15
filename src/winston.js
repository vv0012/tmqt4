const winston = require("winston");

const logConf = {
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/logs.log" }),
    new winston.transports.File({
      filename: "logs/errors.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/acc_log.log",
      level: "acc_log",
    }),
    new winston.transports.File({
      filename: "logs/command_log.log",
      level: "command_log",
    }),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: `App Log: `,
    }),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
    )
  ),
};

const logger = winston.createLogger(logConf);

module.exports = logger;
