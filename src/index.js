const express = require("express");
const app = express();
const logger = require("./winston");
const bodyParser = require("body-parser");

app.use(bodyParser({ extended: true }));

logger.log({
  message: `\n\nserver start\n\n`,
  level: "info",
});

logger.log({
  message: "you can view logs in /logs/*.log",
  level: "info",
});

logger.warn({
  message:
    "this application currently uses NO authentication what so ever. please change this in production mode",
  level: "warn",
});

const port = process.env.PORT || 8080;

const CommandRouter = require("./routes/command.routes");

app.use("/command", CommandRouter);

app.listen(port, () => {
  logger.log({
    message: `server is up on port: ${port}`,
    level: "info",
  });
});
