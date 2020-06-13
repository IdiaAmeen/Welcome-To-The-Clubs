import React from "react";
import "./Books.css";
import { Link, Route } from "react-router-dom";
export default function Books(props) {
  const { books } = props;
  const { clubId } = props.match.params;
  return (
    <>
      <div className="book-club">
        <h2>The Book Club</h2>
      </div>
      {books.map((book) => (
        <React.Fragment key={book.title}>
          <div className="books">
            <p>{book.title}</p>

            <img src={book.image} alt={book.title} />
          </div>
          <div className="viewbook">
            <Link to={`/${clubId}/books/${book.title}`} className="text">
              View
            </Link>
          </div>
        </React.Fragment>
      ))}
      <Link to={`/${clubId}/books/newbook`}>
        <button>New Book</button>
      </Link>
    </>
  );
}
