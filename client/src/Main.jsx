import React, { Component } from "react";
import { Route } from "react-router-dom";
import Books from "./Books";
import Clubs from "./Clubs";
import ViewBook from "./ViewBook";
import { readAllClubs } from "./services/clubs";
import {
  readAllBooks,
  createBook,
  updateBook,
  destroyBook,
  readBook,
} from "./services/books";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      books: [],
      book: [],
    };
  }
  componentDidMount() {
    this.getClubs();
    this.getBooks();
  }
  getClubs = async () => {
    const clubs = await readAllClubs();
    this.setState({ clubs });
  };
  getBooks = async () => {
    const books = await readAllBooks();
    this.setState({ books });
  };
  getBook = async () => {
    const book = await readBook();
    this.setState({ book });
  };
  render() {
    console.log(this.state.clubs);
    console.log(this.state.books);
    return (
      <>
        Hello World
        <Route
          exact
          path="/clubs"
          render={() => <Clubs clubs={this.state.clubs} />}
        />
        <Route
          exact
          path="/books"
          render={() => <Books books={this.state.books} />}
        />
        <Route
          path="/books/:title"
          render={(props) => <ViewBook {...props} book={this.state.book} />}
        />
      </>
    );
  }
}
