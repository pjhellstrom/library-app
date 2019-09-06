const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  pages: Number,
  release_date: Date,
  synopsis: String,
  genre: String,
  image: String,
  url: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
