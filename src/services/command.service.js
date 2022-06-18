/**
 * command service
 */

const logger = require("../winston");
const mqtt = require("../modules/mqtt");

function postCommand(req, res, next) {
  logger.log({ message: "incoming schedule update command", level: "info" });
  try {
    const data = req.body;
    logger.log({
      message: `user schedule request, data: ${data.schedule}`,
      level: "info",
    });
    if (!data.schedule || !data.schedule.length) {
      return res.status(400).json({
        message: "invalid data",
      });
    }
    mqtt().publish("m-topic", data.schedule, (result, err) => {
      if (err) {
        return res.status(500).json({
          message: "error while sending message to device",
        });
      }
      return res.status(200).json({
        message: "message succefully sent to device",
      });
    });
  } catch (err) {
    logger.log({ message: err, level: "error" });
    res.status(500).json({ message: "something went wrong!" });
  }
}

module.exports = {
  postCommand,
};
