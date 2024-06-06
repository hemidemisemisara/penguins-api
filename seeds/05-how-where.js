const howWhere = require("../seed-data/how-where");

exports.seed = async function (knex) {
  await knex("how-where").del();
  await knex("how-where").insert([howWhere]);
};
