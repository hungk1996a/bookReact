class BookController {

    showDB(req, res, next) {
    req.app.get('repo').show()
        .then(data => res.send(data))
        .catch(next)
    }

    createDB(req, res, next) {
        req.app.get('repo').create(req.book)
            .then(data => res.send(data))
            .catch(next)
    }

    updateDB(req, res, next) {
        req.book.setId(req.params.id);
        req.app.get('repo').update(req.book).then(() => console.log('ok'))
            .catch(next)
    }

    deleteDB(req, res, next) {
        req.book.setId(req.params.id);
        req.app.get('repo').delete(req.book)
            .then(() => res.send('done'))
            .catch(next)
    }

    joinDB(req, res, next) {
        req.app.get('repo').join().then(data => res.send(data))
            .catch(next)
    }

    searchDB(req, res, next) {
        req.app.get('factory').search(req.condition)
            .then(data => res.send(data))
            .catch(next)
    }
}
module.exports = BookController;