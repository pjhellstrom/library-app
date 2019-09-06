import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBooksList()
      .then(res => this.setState({ books: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ search: "" });
    API.getBooksOfTitle(this.state.search)
      .then(res => {
        console.log(res);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  addToLibrary = event => {
    const bookId = event.target.attributes.getNamedItem("data-id").value;
    const clickedBook = this.state.results.find(item => item.id === bookId);

    API.saveBookToLibrary({
      title: clickedBook.volumeInfo.title,
      authors: clickedBook.volumeInfo.authors.join(","),
      pages: clickedBook.volumeInfo.pageCount,
      release_date: clickedBook.volumeInfo.publishedDate,
      synopsis: clickedBook.volumeInfo.description,
      genre: clickedBook.volumeInfo.categories.join(","),
      image: clickedBook.volumeInfo.imageLinks.thumbnail,
      url: clickedBook.volumeInfo.previewLink
    }).then(alert("Book has been saved to library!"));
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="https://aal.hku.hk/sites/default/files/topbanner-faculty-education.jpg">
          <h1>Virtual Library</h1>
          <h2>Your books all in one place!</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Add a Book to your Library!</h1>
            </Col>
          </Row>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
          <SearchResults
            results={this.state.results}
            addToLibrary={this.addToLibrary}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
