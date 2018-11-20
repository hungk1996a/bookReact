
exports.up = function(knex, Promise) {
    return knex.schema.createTable('publisher', (table) => {
        table.increments('id');
        table.string('name');
        table.integer('phone');
        table.date('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('publisher')
};
