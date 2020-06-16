import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./EditBook.css";
class EditBook extends Component {
  state = {
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
  };

  componentDidMount() {
    if (this.props.book) {
      this.setBookForm();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.book !== this.props.book) {
      this.setBookForm();
    }
  }

  setBookForm = () => {
    const { title, author, description, image, link } = this.props.book;
    this.setState({ title, author, description, image, link });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, author, description, image, link } = this.state;
    const { putBook, history, book } = this.props;
    return (
      <div className="edit-page">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            putBook(book.id, this.state);
            history.push("/club/:clubId/books");
            this.setState({
              title: "",
              author: "",
              description: "",
              image: "",
              link: "",
            });
          }}
        >
          <h3 id="edit-book">Edit Book</h3>
          <div className="text-inputs">
            <input
              id="edit-text"
              type="text"
              value={title}
              name="title"
              placeholder={book}
              onChange={this.handleChange}
            />
            <input
              id="edit-text"
              type="text"
              value={author}
              name="author"
              onChange={this.handleChange}
            />
            <input
              id="edit-text"
              type="text"
              value={description}
              name="description"
              onChange={this.handleChange}
            />
            <label htmlFor="image">Image:</label>
            <input
              id="edit-text"
              type="text"
              value={image}
              name="image"
              onChange={this.handleChange}
            />
            <input
              id="edit-text"
              type="text"
              value={link}
              name="link"
              onChange={this.handleChange}
            />{" "}
          </div>
          <button id="edit-submit">Submit</button>
          <button
            id="cancel"
            onClick={() => {
              history.push("/club/:clubId/books");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(EditBook);
