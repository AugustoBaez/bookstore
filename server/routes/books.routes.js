const BooksController = require("../controller/books.controller")

module.exports = (app) => {
    app.post("/api/books/new", BooksController.addBook)
    app.get("/api/books", BooksController.findAllBooks)
    app.get("/api/books/:id", BooksController.findBook)
    app.put("/api/books/update/:id", BooksController.updateBook)
    app.delete("/api/books/:id/delete", BooksController.deleteBook)
}