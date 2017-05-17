Get REST API with Node.js, Express from Swagger Editor
======================================================

Пример написания API на основе спецификации в Swagger Editor.  

Пример на основе библиотеки книг.  

**DataBase**: MongoDB  

`npm i -g swagger`  
`npm i`  
`node app.js` - запуск проекта.  

Документация будет доступна по адресу [http://localhost:8000/api_doc/](http://localhost:8000/api_doc/)

API
---

* [GET http://localhost:10010/api/books](http://localhost:10010/api/books) - список книг  
* [GET http://localhost:10010/api/books?genre=фантастика](http://localhost:10010/api/books?genre=фантастика) - список книг с выборкой по жанру  
* [GET http://localhost:10010/api/books/:id](http://localhost:10010/api/books/:id) - выбор книги по id  
* [POST http://localhost:10010/api/books](http://localhost:10010/api/books) - добавить книгу.  
* [PUT http://localhost:10010/api/books/:id](http://localhost:10010/api/books/:id) - перезаписать информацию по выбранной книги по id  
* [PATCH http://localhost:10010/api/books/:id](http://localhost:10010/api/books/:id) - обновить информацию по выбранной книги по id  
* [DELETE http://localhost:10010/api/books/:id](http://localhost:10010/api/books/:id) - удалить выбранную книгу по id  

Tests (пример тестирования get запросов)
----------------------------------------

`swagger project test`  

Как развернуть БД с тестовыми данными
-------------------------------------
Через **Tertminal** заходим в корень проекта.  
```bash
mongo
load('./migrations/init.js')
quit()
```
