exports.up = function (knex) {
  return knex.schema.createTable("things-in-common", (table) => {
    table.string("id").primary();
    table.string("friendship-id").notNullable();
    table.string("description").notNullable();
    table.string("timestamp").notNullable();
    table
      .foreign("friendship-id")
      .references("id")
      .inTable("friendships")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("things-in-common");
};
