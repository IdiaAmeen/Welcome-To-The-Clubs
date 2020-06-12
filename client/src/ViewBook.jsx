import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class ViewBook extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  render() {
    let bookview = books.find((book) => {
      return this.props.match.params.title === book.title;
    });
    return (
      <div key={bookview.title}>
        <h1>{bookview.title}</h1>
        <h3>{bookview.author}</h3>
        <p>{bookview.author}</p>
        <img src={bookview.image} alt={bookview.title} />
        <a href={bookview.link}>
          <img
            src="https://pbs.twimg.com/profile_images/1190291192128442370/oaF8H9sl_400x400.jpg"
            alt="Link to buy"
          />
        </a>
      </div>
    );
  }
}

const ViewWithRouter = withRouter(ViewBook);
export default ViewWithRouter;
