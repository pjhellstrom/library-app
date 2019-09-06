import React from "react";
import "./style.css";

function LibraryResults(props) {
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
            <h3>{result.volumeInfo.title}</h3>
            <h4>{result.volumeInfo.subtitle}</h4>
            <h6>{result.volumeInfo.authors[0]}</h6>
            <p>{result.volumeInfo.pageCount}</p>
            <p>{result.volumeInfo.publishedDate}</p>
            <p>{result.volumeInfo.description}</p>
            <p>{result.volumeInfo.categories[0]}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LibraryResults;
