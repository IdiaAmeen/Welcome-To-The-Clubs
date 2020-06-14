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
            history.push("/:clubId/books");
            this.setState({
              title: "",
              author: "",
              description: "",
              image: "",
              link: "",
            });
          }}
        >
          <div className="edit book">
            <h3>Edit Book</h3>
          </div>
          <label htmlFor="title">Title:</label>
          <input
            id="id"
            type="text"
            value={title}
            name="title"
            placeholder={book}
            onChange={this.handleChange}
          />
          <label htmlFor="author">Author:</label>
          <input
            id="id"
            type="text"
            value={author}
            name="author"
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description:</label>
          <input
            id="id"
            type="text"
            value={description}
            name="description"
            onChange={this.handleChange}
          />
          <label htmlFor="image">Image:</label>
          <input
            id="id"
            type="text"
            value={image}
            name="image"
            onChange={this.handleChange}
          />
          <label htmlFor="link">Link:</label>
          <input
            id="id"
            type="text"
            value={link}
            name="link"
            onChange={this.handleChange}
          />
          <button id="edit-submit">Submit</button>
          <button
            id="cancel"
            onClick={() => {
              history.push("/:clubId/books");
            }}
          ></button>
        </form>
      </div>
    );
  }
}
export default withRouter(EditBook);
