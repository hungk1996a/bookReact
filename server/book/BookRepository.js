const BookFactory = require('./BookFactory');
const bookFactory = new BookFactory();
class BookRepository {
    constructor(knex) {
        this.knex = knex;
    }

    show() {
        return this.knex.select().from('books').where('deleted_at', null);
    }

    create(book) {
        return this.knex('books').insert({
           title: book.getTitle(),
           publisher_id: book.getPublisher(),
           price: book.getPrice(),
        });
    }
    update(book) {
        return this.knex('books').where({id: book.getId()}).update({
           title: book.getTitle(),
           publisher_id: book.getPublisher(),
           price: book.getPrice(),
        });
    }
    delete(book) {
        return this.knex('books').where({id: book.getId()}).update({deleted_at: new Date()})
    }
    join() {
        return this.knex.select('books.title', 'books.publisher_id', 'books.id', 'books.price'
            , 'publisher.name', 'publisher.phone').from('books')
            .leftJoin('publisher', 'books.publisher_id', 'publisher.id')
            .then(data => data.map(element => bookFactory.makeFromDB(element)))
    }
}
module.exports = BookRepository;