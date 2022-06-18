/**
 * mqtt connection config
 */

module.exports = {
  host: "mosquitto",
  port: "8883",
  path: "",
  protocol: "mqtt",
  clean: true,
  connectTimeout: 4000,
  protocol: "mqtt",
  username: "username",
  password: "password",
  reconnectPeriod: 10000,
  reconnectPeriod: 4 * 1000,
  connectTimeout: 6 * 1000,
  wsOptions: {
    handshakeTimeout: 3 * 1000,
  },
};
