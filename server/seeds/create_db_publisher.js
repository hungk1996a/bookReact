
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publisher').del()
    .then(function () {
      // Inserts seed entries
      return knex('publisher').insert([
        {name: 'rowValue1', phone: '123'},
        {name: 'rowValue2', phone: '123'},
        {name: 'rowValue3', phone: '123'}
      ]);
    });
};
