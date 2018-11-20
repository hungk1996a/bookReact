const BookFactory = require('../book/BookFactory');
module.exports = (req, res, next) => {
  const bookFactory = new BookFactory();
  req.book = bookFactory.makeFromRequest(req.body);
  next();
};