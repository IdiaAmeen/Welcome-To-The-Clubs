import React, { Component } from "react";

import "./CreateBook.css";
export default class CreateBook extends Component {
  state = {
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, author, description, image, link } = this.state;
    const { postBook, history } = this.props;
    const { clubId } = this.props.match.params;

    return (
      <form
        id="createbook"
        onSubmit={(e) => {
          e.preventDefault();
          postBook(this.state, clubId);
          history.push(`/club/${clubId}/books`);
          this.setState({
            title: "",
            author: "",
            description: "",
            image: "",
            link: "",
          });
        }}
      >
        <h3 id="addbook">Add Your Favorite Book</h3>
        <input
          id="create"
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={this.handleChange}
        />{" "}
        <input
          id="create"
          type="text"
          name="author"
          value={author}
          placeholder="Author"
          onChange={this.handleChange}
        />
        <input
          id="create"
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={this.handleChange}
        />
        <input
          id="create"
          type="text"
          name="image"
          value={image}
          placeholder="Image"
          onChange={this.handleChange}
        />
        <input
          id="create"
          type="text"
          name="link"
          value={link}
          placeholder="Link"
          onChange={this.handleChange}
        />
        <button id="create-submit">Submit</button>
      </form>
    );
  }
}
