
const Publisher = require('./Publisher');
const PublisherFactory = require('./PublisherFactory');
const publisherFactory = new PublisherFactory();

class PublisherProvider {
    constructor(connection) {
        this.connection = connection;
    }
    Provide(id) {
        return this.connection.select().from('publisher').where({id: id})
            .then(data => {
                if(data.length === 0){
                    return new Publisher("");
                }return publisherFactory.makeFromPublisher(data[0])
            })
    }

    ProvideAll() {
        return this.connection.select().from('publisher')
            .then(data => {
                let publishers;
                publishers = data.map(element => publisherFactory.makeFromPublisher(element));
                return publishers;
            })
    }
}
module.exports = PublisherProvider;