const Publisher = require('./Publisher');
class PublisherFactory {
    makeFromPublisher(publisherRaw) {
        const publisher = new Publisher(publisherRaw.name);
        publisher.setPhone(publisherRaw.phone);
        return publisher;
    }
}
module.exports = PublisherFactory;