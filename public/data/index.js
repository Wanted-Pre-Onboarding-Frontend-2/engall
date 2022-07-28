const schedule = require("./schedule");
const users = require("./user");
// TODO: 변수명 변경해야합니다. 임의로 user_

const combinedRoutes = {
  schedule: schedule.card,
  users,
};

module.exports = () => combinedRoutes;
