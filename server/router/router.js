const express = require('express');
const router = new express.Router();
const bookRequest = require('../middleWare/index');
const BookController = require('../controller/BookController');
const bookController = new BookController();

router.get('/show', bookController.showDB);
router.post('/create', bookRequest.checkBook, bookController.createDB);
router.put('/update/:id', bookRequest.checkBook, bookController.updateDB);
router.delete('/delete/:id', bookRequest.checkBook, bookController.deleteDB);
router.get('/join', bookRequest.checkBook, bookController.joinDB);

router.get('/book/:id', bookRequest.checkSearch, bookController.searchDB);
router.get('/search-advance', bookRequest.checkSearch, bookController.searchDB);
router.get('/search-basic', bookRequest.checkSearch, bookController.searchDB);

module.exports = router;