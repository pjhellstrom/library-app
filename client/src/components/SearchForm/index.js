import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in a title to begin..."
          id="breed"
        />
        <datalist id="books">
          {props.books.map(book => (
            <option value={book} key={book} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-dark"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
