
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
      table.increments('id');
      table.string('title');
      table.integer('publisher_id');
      table.integer('price');
      table.date('deleted_at')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
