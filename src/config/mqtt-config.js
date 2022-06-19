/**
 * mqtt connection config
 */

module.exports = {
  host: "mosquitto",
  port: "1883",
  path: "",
  protocol: "mqtt",
  clean: true,
  connectTimeout: 4000,
  protocol: "mqtt",
  username: "alim",
  password: "a111111",
  reconnectPeriod: 10000,
  reconnectPeriod: 4 * 1000,
  connectTimeout: 6 * 1000,
  wsOptions: {
    handshakeTimeout: 3 * 1000,
  },
};
