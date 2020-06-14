import React from "react";
import { withRouter } from "react-router-dom";
import "./DeleteBook.css";
function DeleteBook(props) {
  const { display, bookViewId, handleClick, removeBook, bookView } = props;

  if (display === true) {
    return (
      <>
        <div className="outer-modal">
          <div className="inner-modal">
            <h3>Are you sure you want to delete {bookView.title}?</h3>
            <img src={bookView.image} alt={bookView.title} id="image" />
            <div className="options">
              <button
                className="deletebuttons"
                onClick={() => {
                  removeBook(bookViewId);
                }}
              >
                Delete
              </button>
              <button className="deletebuttons" onClick={handleClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(DeleteBook);
