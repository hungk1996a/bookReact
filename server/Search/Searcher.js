class Searcher {
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }
    search(condition) {
        const factory = this.factory;
        const sqlQuery = this.connection.select('books.title', 'books.publisher_id', 'books.price', 'books.id'
            , 'publisher.name', 'publisher.phone', 'publisher.id').from('books')
            .leftJoin('publisher', 'publisher_id', 'publisher.id');
        condition.describe(sqlQuery);
        return sqlQuery.then(data => data.map(element => factory.makeFromDB(element)))
    }
}
module.exports = Searcher;