exports.up = function (knex) {
  return knex.schema.createTable("letters", (table) => {
    table.string("id").primary();
    table.string("friendship-id").notNullable();
    table.string("created-by").notNullable();
    table.string("subject").notNullable();
    table.text("content").notNullable();
    table.timestamp("timestamp").notNullable();
    table.boolean("isRead").notNullable();
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
  return knex.schema.dropTable("letters");
};
