import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Clubs from "./Clubs";
import { readAllClubs } from "./services/clubs";
import { readAllBooks } from "./services/books";
export default class App extends Component {
  state = {
    clubs: [],
    books: [],
  };
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

  render() {
    console.log(this.state.clubs);
    console.log(this.state.books);
    return (
      <>
        Hello World
        <SignUp />
        <Route
          exact
          path="/clubs"
          render={() => <Clubs clubs={this.state.clubs} />}
        />
        {/* <Route
          exact
          path="/books"
          render={() => <Books books={this.state.books} />} */}
        />
      </>
    );
  }
}
