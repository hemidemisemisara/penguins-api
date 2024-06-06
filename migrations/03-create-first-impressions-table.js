exports.up = function (knex) {
  return knex.schema.createTable("first-impressions", (table) => {
    table.string("id").primary();
    table.string("friendship-id").notNullable();
    table.string("created-by").notNullable();
    table.text("description").notNullable();
    table.string("image").notNullable();
    table.string("image-title").notNullable();
    table
      .foreign("friendship-id")
      .references("id")
      .inTable("friendships")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("created-by")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("first-impressions");
};
