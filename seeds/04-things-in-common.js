const thingsInCommon = require("../seed-data/things-in-common");

exports.seed = async function (knex) {
  await knex("things-in-common").del();
  await knex("things-in-common").insert(thingsInCommon);
};
