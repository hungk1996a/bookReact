const Book = require('./Book');
const Publisher = require('../publisher/Publisher');
class BookFactory {
    makeFromRequest(bookRaw) {
        const book = new Book(bookRaw.title);
        book.setPublisher(bookRaw.publisher_id);
        book.setPrice(bookRaw.price);
        return book;
    }
    makeFromDB(bookRaw) {
        const book = new Book(bookRaw.title);
        book.setPrice(bookRaw.price);
        book.setId(bookRaw.id);
        const publisher = new Publisher(bookRaw.name);
        publisher.setPhone(bookRaw.phone);
        book.setPublisher(publisher);
        return book;
    }
}
module.exports = BookFactory;