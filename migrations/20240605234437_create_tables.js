exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.string("id").primary();
      table.string("first-name").notNullable();
      table.string("last-name").notNullable();
      table.string("email").notNullable();
      table.string("profile-photo").notNullable();
      table.string("location").notNullable();
      table.string("timezone").notNullable();
    })
    .createTable("friendships", (table) => {
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
    })
    .createTable("first-impressions", (table) => {
      table.string("id").primary();
      table.string("friendship-id").notNullable();
      table.string("created-by").notNullable();
      table.string("description").notNullable();
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
    })
    .createTable("things-in-common", (table) => {
      table.string("id").primary();
      table.string("friendship-id").notNullable();
      table.string("description").notNullable();
      table
        .foreign("friendship-id")
        .references("id")
        .inTable("friendships")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("how-where", (table) => {
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
    })
    .createTable("memories", (table) => {
      table.string("id").primary();
      table.string("friendship-id").notNullable();
      table.string("created-by").notNullable();
      table.string("date").notNullable();
      table.string("title").notNullable();
      table.string("image").notNullable();
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
    })
    .createTable("letters", (table) => {
      table.string("id").primary();
      table.string("friendship-id").notNullable();
      table.string("created-by").notNullable();
      table.string("subject").notNullable();
      table.string("content").notNullable();
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
  return knex.schema
    .dropTable("letters")
    .dropTable("memories")
    .dropTable("how-where")
    .dropTable("things-in-common")
    .dropTable("first-impressions")
    .dropTable("friendships")
    .dropTable("users");
};
