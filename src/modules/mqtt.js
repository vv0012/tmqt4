/**
 * mqtt service
 *
 * no single target support, messages will yield to all those who hear,
 * no client auth supported neither!
 *
 */

const mqtt = require("mqtt");
const config = require("../config/mqtt-config");
const { randomBytes } = require("crypto");
const { logger, accLogger, commandLogger } = require("../winston");

module.exports = (function createConnect() {
  class MqttConnection {
    service;
    clients = []; // store clients in memory. not a clever approach but does it for MVP!
    constructor() {
      const id = `server_on_${randomBytes(2).toString("hex")}`;
      this.service = mqtt.connect(`mqtt://${config.host}`, {
        ...config,
        clientId: id,
      });
      this.service.on("connect", () => {
        logger.log({
          message: `mqtt connection created with id : ${id}`,
          level: "info",
        });
      });
      this.service.on("error", (err) => {
        logger.error({
          message: "mqtt error " + err,
          level: "error",
        });
      });
      this.service.on("message", (topic, message, packet) => {
        try {
          if (topic === "tenis1/acc") {
            accLogger.info({
              message: JSON.parse(message.toString()),
              level: "acc_log",
            });
          } else if (topic === "tenis1/command") {
            commandLogger.info({
              message: JSON.parse(message.toString()),
              level: "command_log",
            });
          }
        } catch (err) {}
      });
      this.service.subscribe("tenis1/acc", (data) => {});
      this.service.subscribe("tenis1/command", (data) => {});
    }
    // probably never needed!, returns mqtt instance itself. avoid using this. add methods to class instead
    getMqttInstance() {
      return this.service;
    }
    publish(topic, message, cb) {
      logger.log({
        message: `publising message: "${JSON.stringify(
          message
        )}" on "${topic}" topic`,
        level: "info",
      });
      this.service.publish(topic, JSON.stringify(message), (err) => {
        if (!err) return cb(true, null);
        logger.log({
          message: `error while publishing message on topic : ${topic}, message content: ${JSON.stringify(
            message
          )}, error message: ${err}`,
          level: "error",
        });
        return cb(null, err);
      });
      return null;
    }
  }
  instance = null;
  return function () {
    if (!this.instance) {
      this.instance = new MqttConnection();
    }
    return this.instance;
  };
})();
