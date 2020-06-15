import React, { Component } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import DeleteBook from "./DeleteBook";
import "./ViewBook.css";

class ViewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      editOn: false,
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      display: !prevState.display,
    }));
  };
  handleEdit = () => {
    this.setState((prevState) => ({
      editOn: !prevState.editOn,
    }));
  };

  render() {
    let bookview =
      this.props.books.find((book) => {
        return this.props.match.params.title === book.title;
      }) || {};

    return (
      <>
        <div key={bookview.title} className="onebook-view">
          <img src={bookview.image} alt={bookview.title} id="book-cover" />
          <h3 id="book-title">{bookview.title}</h3>

          <p>{bookview.author}</p>
          <p id="description">{bookview.description}</p>
          <div className="buy">
            <p id="buy-book">Get Your Copy!</p>
            <a href={bookview.link}>
              <img
                className="strand"
                src={require("./images/strand.png")}
                alt="Link to buy"
              />
            </a>
          </div>
          {this.props.currentUser && (
            <div className="crud-buttons">
              <Link to={`/:clubId/book/${bookview.id}/edit`}>
                <button onClick={this.handleEdit} className="edit">
                  Edit
                </button>
              </Link>

              <button onClick={this.handleClick} className="delete">
                Delete
              </button>
              <div className="modal">
                {this.state.display && (
                  <DeleteBook
                    display={this.state.display}
                    bookViewId={bookview.id}
                    putBook={this.props.putBook}
                    handleClick={this.handleClick}
                    bookView={bookview}
                    removeBook={this.props.removeBook}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
const ViewWithRouter = withRouter(ViewBook);
export default ViewWithRouter;
{
  /* <Route
path="/:clubId/books/:title/edit"
render={(props) => {
  const bookId = this.props.match.params.title;
  const book = this.state.books.find((book) => book.title === bookId);
  return (
    <EditBook
      {...props}
      book={book}
      putBook={this.putBook}
      bookId={bookId}
    /> */
}
