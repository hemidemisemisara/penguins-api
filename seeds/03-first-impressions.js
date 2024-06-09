const firstImpressions = require("../seed-data/first-impressions");

exports.seed = async function (knex) {
  await knex("first-impressions").del();
  await knex("first-impressions").insert(firstImpressions);
};
