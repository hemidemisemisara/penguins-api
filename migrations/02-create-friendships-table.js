exports.up = function (knex) {
  return knex.schema.createTable("friendships", (table) => {
    table.string("id").primary();
    table.string("user-one").notNullable();
    table.string("user-two").notNullable();
    table.string("friends-since").notNullable();
    table
      .foreign("user-one")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("user-two")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("friendships");
};
