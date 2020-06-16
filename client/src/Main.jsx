import React, { Component } from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import Books from "./Books";
import Clubs from "./Clubs";
import ViewBook from "./ViewBook";
import CreateBook from "./CreateBook";
import EditBook from "./EditBook";
import Welcome from "./Welcome";
import Header from "./Header";
import { readAllClubs } from "./services/clubs";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import {
  readAllBooks,
  createBook,
  updateBook,
  destroyBook,
  readBook,
} from "./services/books";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      books: [],
      // book: [],
    };
  }
  componentDidMount() {
    this.getClubs();
    this.getBooks();
    return this.props.currentUser;
  }
  getClubs = async () => {
    const clubs = await readAllClubs();
    this.setState({ clubs });
  };
  getBooks = async () => {
    const books = await readAllBooks();
    this.setState({ books });
  };
  removeBook = async (bookId) => {
    const nixBook = await destroyBook(bookId);
    this.setState((prevState) => ({
      books: prevState.books.filter((books) => books.id !== bookId),
    }));
  };
  postBook = async (bookData, clubId) => {
    const newBook = await createBook(bookData, clubId);
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };
  putBook = async (id, bookData) => {
    const updatedBook = await updateBook(id, bookData);
    this.setState((prevState) => ({
      books: prevState.books.map((book) =>
        book.id === id ? updatedBook : book
      ),
    }));
  };
  render() {
    return (
      <>
        <Header
          currentUser={this.props.currentUser}
          handleLogout={this.props.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Clubs clubs={this.state.clubs} />}
          />
          {/* <Route exact path="/" render={() => <Welcome />} /> */}​
          <Route exact path="/join/signup">
            <SignUp
              handleLoginSubmit={this.props.handleLoginSubmit}
              handleSignUpSubmit={this.props.handleSignUpSubmit}
              currentUser={this.props.currentUser}
            />
          </Route>
          <Route
            exact
            path="/join/signin"
            render={(props) => (
              <SignIn
                {...props}
                handleLoginSubmit={this.props.handleLoginSubmit}
                currentUser={this.props.currentUser}
              />
            )}
          />
          <Route
            path="/club/:clubId/books"
            render={(props) => (
              <Books
                {...props}
                books={this.state.books}
                currentUser={this.props.currentUser}
              />
            )}
          />
          ​
          <Route
            exact
            path="/:clubId/book/:title"
            render={(props) => (
              <ViewBook
                {...props}
                books={this.state.books}
                removeBook={this.removeBook}
                currentUser={this.props.currentUser}
                clubId={this.props.clubId}
                // putBook={this.putBook}
              />
            )}
          />
          ​
          <Route
            exact
            path="/:clubId/createbook"
            render={(props) => (
              <CreateBook {...props} postBook={this.postBook} />
            )}
          />
          ​
          <Route
            exact
            path="/:id/edit"
            render={(props) => (
              <EditBook
                {...props}
                book={this.state.books.find(
                  (book) => book.id === parseInt(props.match.params.id)
                )}
                putBook={this.putBook}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}
// Link to =`/${clubId}/books/newbook`
export default withRouter(Main);
