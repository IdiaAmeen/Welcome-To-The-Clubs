import React, { Component } from "react";

export default class UpdateFood extends Component {
  state = {
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
  };

  componentDidMount() {
    if (this.props.book) {
      this.setBook();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.book !== this.props.book) {
      this.setBook();
    }
  }

  setBook = () => {
    const { name } = this.props.book;
    this.setState({ name });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name } = this.state;
    const { putBook, history, book } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          putBook(book.id, this.state);
          history.push("/books");
          this.setState({
            name: "",
          });
        }}
      >
        <hr />
        <h3>Update Food</h3>
        <label htmlFor="name">Title:</label>
        <input id="id" type="text" value={name} onChange={this.handleChange} />
        <label htmlFor="name">Author:</label>
        <input id="id" type="text" value={name} onChange={this.handleChange} />
        <label htmlFor="name">Description:</label>
        <input id="id" type="text" value={name} onChange={this.handleChange} />
        <label htmlFor="name">Image:</label>
        <input id="id" type="text" value={name} onChange={this.handleChange} />
        <label htmlFor="name">Link:</label>
        <input id="id" type="text" value={name} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
