import React from "react";
import { Link, Route } from "react-router-dom";
export default function Books(props) {
  const { books } = props;

  return (
    <>
      {books.map((book) => (
        <React.Fragment key={book.title}>
          <p>{book.title}</p>

          <img src={book.image} alt={book.title} />
          <Link to={"/books/" + book.title}>View Book</Link>
        </React.Fragment>
      ))}
    </>
  );
}
