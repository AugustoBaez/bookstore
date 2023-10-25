const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    book: {
        type: String
    },
    author: {
        type: String
    },
    publishYear: {
        type: String
    }
}, { timestamps: true })

const Book = mongoose.model("Book", BookSchema)
module.exports = Book
