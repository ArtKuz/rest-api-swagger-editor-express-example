'use strict';

const Book = require('../models/bookModel');

const booksController = {
    // список книг
    getAll(req, res) {
        const query = {};

        // список книг по определенному жанру
        if (req.swagger.params.genre.value) {
            query.genre = req.swagger.params.genre.value;
        }

        Book.find(query, (err, books) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(books);
            }
        })
    },
    // добавление новой книги
    post(req, res) {
        const book = new Book(req.body);

        // title - обяязательный параметр
        if (!req.body.title) {
            res.status(400);
            res.send('Title is required');
        } else {
            book.save();
            res.status(201);
            res.send(book);
        }
    },
};

module.exports = booksController;