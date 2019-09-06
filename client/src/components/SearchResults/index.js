import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.etag} className="list-group-item">
          <div>
            <img
              alt="Book"
              src={result.volumeInfo.imageLinks.thumbnail}
              className="img-fluid"
            />
            <h3 book-title={result.volumeInfo.title}>
              {result.volumeInfo.title}
            </h3>
            <h4>{result.volumeInfo.subtitle}</h4>
            <h6>{result.volumeInfo.authors.join(",")}</h6>
            <p>{result.volumeInfo.pageCount}</p>
            <p>{result.volumeInfo.publishedDate}</p>
            <p>{result.volumeInfo.description}</p>
            <p>{result.volumeInfo.categories.join(",")}</p>
            <a href={result.volumeInfo.previewLink}>Read more</a>
            <br />
            <button
              onClick={props.addToLibrary}
              className="btn-primary"
              data-id={result.id}
            >
              Add to Library
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
