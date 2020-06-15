import React from "react";
import "./Books.css";
import { Link, Redirect } from "react-router-dom";
export default function Books(props) {
  const { books, currentUser } = props;
  const { clubId } = props.match.params;

  return (
    <>
      <div className="book-club">
        <h2>The Book Club</h2>
        {currentUser && (
          <Link to={`/${clubId}/book/newbook`}>
            <img
              src={require("./images/addbook.png")}
              alt="Add Book"
              id="add-book"
            />
          </Link>
        )}
      </div>
      <div className="book-desktop">
        {books.map((book) => (
          <React.Fragment key={book.title}>
            <Link to={`/${clubId}/book/${book.title}`} className="books">
              <p id="titles">{book.title}</p>

              <img src={book.image} alt={book.title} />
            </Link>
            <div className="viewbook">
              <Link to={`/${clubId}/book/${book.title}`} className="text">
                View
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
