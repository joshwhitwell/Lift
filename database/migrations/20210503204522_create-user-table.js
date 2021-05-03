exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("user_id");
    tbl.string("user_name", 128).notNullable().unique();
    tbl.date("user_date_of_birth");
    tbl.string("user_gender", 128);
    tbl.decimal("user_height");
    tbl.decimal("user_weight");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
