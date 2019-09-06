import React, { Component } from "react";
import LibraryResults from "../components/LibraryResults";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Library extends Component {
  state = {
    results: [],
    bookCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.fetchLibrary();
  }

  fetchLibrary = () => {
    API.getAllBooks()
      .then(res => this.setState({ results: res.data.items }))
      .then(res => this.setState({ bookCount: res.data.items.length }))
      .catch(err => console.log(err));
  };
  generateBookCards = () => {};

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const bookType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (bookType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.fetchLibrary();
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Here is your library</h1>
        <h3 className="text-center">You can view and remove books here!</h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          You have {this.state.bookCount} books in your library!
        </h1>
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
          <LibraryResults results={this.state.results} />
        </Container>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Deleted book from library!
        </Alert>
      </div>
    );
  }
}

export default Library;
