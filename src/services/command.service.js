/**
 * command service
 */

const logger = require("../winston");

function postCommand(req, res, next) {
  logger.log({ message: "incoming schedule update command", level: "info" });
  try {
    const data = req.body;
    if (!data.schedule) {
      return res.status(400).json({
        message: "invalid data",
      });
    }
  } catch (err) {
    logger.log({ message: err, level: "error" });
    res.status(500).json({ message: "something went wrong!" });
  }
}

module.exports = {
  postCommand,
};
