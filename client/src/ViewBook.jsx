import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import DeleteBook from "./DeleteBook";
import "./ViewBook.css";
import EditBook from "./EditBook";
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
    console.log(this.state.display);
    return (
      <>
        <div key={bookview.title} className="book-view">
          <img src={bookview.image} alt={bookview.title} />
          <h3>{bookview.title}</h3>

          <p>{bookview.author}</p>
          <p>{bookview.description}</p>
          <div className="buy">
            <a href={bookview.link}>
              <img
                className="strand"
                src={require("./images/strand.png")}
                alt="Link to buy"
              />
            </a>
          </div>
          <div className="crud-buttons">
            <Link to={`/:clubId/books/${bookview.id}/edit`}>
              <button onClick={this.handleEdit} className="edit">
                Edit
              </button>
            </Link>
            {/* <div className="modal">
              {this.state.editOn && (
                <EditBook
                  {...props}
                  editOn={this.state.editOn}
                  bookViewId={bookview.id}
                  removeBook={this.props.removeBook}
                  handleEdit={this.handleEdit}
                  bookView={bookview}
                />
              )}
            </div> */}
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
                />
              )}
            </div>
          </div>
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
