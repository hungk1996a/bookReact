const express = require('express');
const app = express();
require('dotenv').config();
const knex = require('./config');
const router = require('./router/router.js');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const BookFactory = require('./book/BookFactory');
const BookRepository = require('./book/BookRepository');
const PublisherProvider = require('./publisher/PublisherProvider');
const Searcher = require('./Search/Searcher');

// const PublisherProvider = require('./publisher/PublisherProvider');

app.set('repo', new BookRepository(knex));
app.set('factory', new Searcher(knex, new BookFactory()));
app.set('publishers', new PublisherProvider(knex));
app.use(router);
app.listen(3003, () => console.log('run'));