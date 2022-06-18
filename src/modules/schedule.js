/**
 * jobs are stored in memory now.
 *
 * please hold job information to a database, this phase is skipped due to project \
 * being time-force mvp
 */

const logger = require("../winston");

module.exports = (function () {
  logger.warn({
    message:
      "this app uses in memory data storage, please move data into a secure database ASAP",
  });
  class SchduleHelper {
    jobs = [];
    constructor() {}
    createJob() {}
    deleteJob() {}
    updateJob() {}
    getJob() {}
    getJobs() {}
  }
  instance = null;
  return function () {
    if (!instance) {
      this.instance = new SchduleHelper();
    }
    return instance;
  };
})();
