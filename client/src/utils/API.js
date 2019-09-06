import axios from "axios";

// Export an object containing methods we'll use for accessing the Google Books API and DB API

export default {
  getAllBooks: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getBooksOfTitle: function(book) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        book +
        "&key=AIzaSyCNaYGWTr6Ks8f3LWWGIg_Exl0USIv60YM"
    );
  },
  getBaseBooksList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },
  saveBookToLibrary: function(newBook) {
    return axios.post("/api/books", newBook);
  }
};
