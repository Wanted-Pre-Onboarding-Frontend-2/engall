const schedule = require('./schedule');
const users = require('./user');

const combinedRoutes = {
  schedule: schedule.card,
  users,
};

module.exports = () => combinedRoutes;
