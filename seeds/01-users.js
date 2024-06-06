const users = require("../seed-data/users");

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([users]);
};
