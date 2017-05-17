'use strict';

const Book = require('../models/bookModel');

const booksIdController = {
    // выборка книги по id
    get(req, res) {
        Book.findById(req.swagger.params.bookId.value, (err, book) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (book) {
                    res.json(book);
                } else {
                    res.status(404).send('no book found');
                }
            }
        });
    },
    // перезаписать информацию по выбранной книги по id
    put(req, res) {
        Book.findById(req.swagger.params.bookId.value, (err, book) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (book) {
                    // должны быть перезаписаны все параметры
                    book.title = req.body.title;
                    book.author = req.body.author;
                    book.genre = req.body.genre;
                    book.read = req.body.read;

                    book.save((err) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(book);
                        }
                    });
                } else {
                    res.status(404).send('no book found');
                }
            }
        });
    },
    // обновить информацию по выбранной книги по id
    patch (req, res) {
        Book.findById(req.swagger.params.bookId.value, (err, book) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (book) {
                    if (req.body._id)
                        delete req.body._id;

                    for (let p in req.body) {
                        book[p] = req.body[p];
                    }

                    book.save((err) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json(book);
                        }
                    });
                } else {
                    res.status(404).send('no book found');
                }
            }
        });
    },
    // удалить выбранную книгу по id
    delete(req, res) {
        Book.findById(req.swagger.params.bookId.value, (err, book) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (book) {
                    book.remove((err) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.status(204).send('Removed');
                        }
                    });
                } else {
                    res.status(404).send('no book found');
                }
            }
        });
    }
};

module.exports = booksIdController;