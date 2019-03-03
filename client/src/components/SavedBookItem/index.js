import React from "react";
import "./style.css";
// This file exports both the List and ListItem components

function SavedBookItem(props) {
  var book = props.bookData;
  return (
    <div className="book-item" id={book.googleId}>
      <div className="book-header">
        <strong>{book.title}</strong>
        <p>Written by: {book.authors.join(", ")}</p>
      </div>
      <div className="book-buttons">
        <button type="button" onClick={() => {
          window.open(book.link);
        }}>View</button>
        <button type="button" onClick={() => props.deleteBook(book._id)}>Delete</button>
      </div>
      <img src={book.image} alt={book.title + " Image"} />
      <div className="book-description">
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default SavedBookItem;