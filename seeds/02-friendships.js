const friendships = require("../seed-data/friendships");

exports.seed = async function (knex) {
  await knex("friendships").del();
  await knex("friendships").insert(friendships);
};
