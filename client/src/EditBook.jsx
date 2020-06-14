import React, { Component } from "react";

export default class UpdateFood extends Component {
  state = {
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
  };
  // Our update component is very similar to our Create
  // component except that we have additional methods to
  // set the form data for the item in state that we want to update.

  // componentDidMount will set our form data when the component renders
  // however if we refresh the page on the form, the food wont exist yet.
  // This is why we only setFoodForm inside of the conditional.
  componentDidMount() {
    if (this.props.book) {
      this.setBookForm();
    }
  }

  // componentDidUpdate only gets triggered when we refresh the page on the form.
  // the food props wont be there when the component first mounts but will
  // "arrive" a moment later. componentDidUpdate will see this and then setFoodForm.
  componentDidUpdate(prevProps) {
    if (prevProps.book !== this.props.book) {
      this.setBookForm();
    }
  }

  // setFoodForm just grabs the food passed from props and sets state
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
        <hr />
        <h3>Edit Book</h3>
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
        <button>Submit</button>
      </form>
    );
  }
}
