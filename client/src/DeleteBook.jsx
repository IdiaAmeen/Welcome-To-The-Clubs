import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ViewBook from "./ViewBook";
class DeleteBook extends Component {
  state = {
    display: false,
  };
  render() {
    if (display === false) {
      return null;
    } else {
      return (
        <>
          <div className="outer-modal">
            <div className="inner-modal">
              <p>Are you sure you want to delete this book?</p>
              <button>Delete</button>
              <button>Cancel</button>
            </div>
          </div>
        </>
      );
    }
  }
}
export default withRouter(DeleteBook);
