/**
 * mqtt service
 *
 * no single target support, messages will yield to all those who hear,
 * no client auth supported neither!
 *
 */

const mqtt = require("mqtt");

module.exports = (function createConnect() {
  class MqttConnection {
    service;
    clients = []; // store clients in memory. not a clever approach but does it for MVP!
    constructor() {
      this.service = null;
    }
    getMqttInstance() {
      return this;
    }
    publish(topic, message) {
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
