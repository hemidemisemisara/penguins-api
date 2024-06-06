exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary();
    table.string("first-name").notNullable();
    table.string("last-name").notNullable();
    table.string("email").notNullable();
    table.string("profile-photo").notNullable();
    table.string("location").notNullable();
    table.string("timezone").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
