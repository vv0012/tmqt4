/**
 * jobs are stored in memory now.
 *
 * please hold job information to a database, this phase is skipped due to project \
 * being time-force mvp
 *
 * schedule is not used currently, scheduling is handled in client side.
 * current strategy may not work! not deleting this module
 */

const schedule = require("node-schedule");
const logger = require("../winston");

module.exports = (function () {
  logger.warn({
    message:
      "this app uses in memory data storage, please move data into a secure database ASAP",
  });
  class SchduleHelper {
    jobs = [];
    constructor() {}
    createJob(id, date) {
      schedule.scheduleJob(id, date, () => {});
    }
    deleteJob(id) {
      const job = this.getJob(id);
      if (job) job.cancel();
    }
    updateJob(id, date) {
      const job = this.getJob(id);
      if (job) job.reschedule(date);
    }
    getJob(id) {
      const job = schedule.scheduledJobs[id];
      return job;
    }
  }
  instance = null;
  return function () {
    if (!instance) {
      this.instance = new SchduleHelper();
    }
    return instance;
  };
})();
