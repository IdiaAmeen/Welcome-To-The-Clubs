import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ViewBook.css";
class ViewBook extends Component {
  constructor(props) {
    super(props);
    // this.state = { books: [] };
  }
  render() {
    let bookview =
      this.props.books.find((book) => {
        return this.props.match.params.title === book.title;
      }) || {};
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
                src="https://pbs.twimg.com/profile_images/1190291192128442370/oaF8H9sl_400x400.jpg"
                alt="Link to buy"
              />
            </a>
          </div>
          <div className="crud-buttons">
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </>
    );
  }
}
const ViewWithRouter = withRouter(ViewBook);
export default ViewWithRouter;
