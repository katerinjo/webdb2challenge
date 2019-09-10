
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.boolean('automatic').nullable();
    tbl.string('status').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
