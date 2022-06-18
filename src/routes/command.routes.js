const express = require("express");
const routes = express.Router();

const CommandService = require("../services/command.service");

routes.post("/", CommandService.postCommand);

module.exports = routes;
