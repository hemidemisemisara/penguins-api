exports.up = function (knex) {
  return knex.schema.createTable("how-where", (table) => {
    table.string("id").primary();
    table.string("friendship-id").notNullable();
    table.string("image").notNullable();
    table.string("image-title").notNullable();
    table.string("description").notNullable();
    table
      .foreign("friendship-id")
      .references("id")
      .inTable("friendships")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("how-where");
};
