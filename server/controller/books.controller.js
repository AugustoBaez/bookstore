const Books = require("../models/books.model")

module.exports.findAllBooks = (req, res) => {
    Books.find()
        .then((books) => res.json({ books }))
        .catch((error) => res.json({ message: "error finding books", error }))
}

module.exports.findBook = (req, res) => {
    Books.find({ _id: req.params.id }, req.body, { new: true })
        .then((book) => res.json({ book }))
        .catch((error) => res.json({ message: "error finding book", error }))
}

module.exports.addBook = async (req, res) => {
    try {
        const newBook = await Books.create(req.body)
        res.json({ book: newBook })
    }
    catch (error) {
        console.log("error adding new book", error)
        res.status(500).json({ message: "error adding new book", error })
    }
}

module.exports.updateBook = (req, res) => {
    Books.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updateBook) => res.json({ book: updateBook }))
        .catch((error) => res.json({ message: "error updating book", error }))
}

module.exports.deleteBook = (req, res) => {
    Books.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result }))
        .catch((error) => res.json({ message: "error deleting book", error }))
}

