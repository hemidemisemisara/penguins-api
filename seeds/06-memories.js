const memories = require("../seed-data/memories");

exports.seed = async function (knex) {
  await knex("memories").del();
  await knex("memories").insert(memories);
};
