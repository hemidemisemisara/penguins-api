const letters = require("../seed-data/letters");

exports.seed = async function (knex) {
  await knex("letters").del();
  await knex("letters").insert([letters]);
};
