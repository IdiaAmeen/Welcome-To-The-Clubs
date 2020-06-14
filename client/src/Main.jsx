import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Books from "./Books";
import Clubs from "./Clubs";
import ViewBook from "./ViewBook";
import CreateBook from "./CreateBook";
import EditBook from "./EditBook";
import { readAllClubs } from "./services/clubs";

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
    this.props.history.push(`/:clubId/books`);
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
        <Route
          exact
          path="/"
          render={() => <Clubs clubs={this.state.clubs} />}
        />
        <Route
          exact
          path="/:clubId/books"
          render={(props) => <Books {...props} books={this.state.books} />}
        />
        <Route
          path="/:clubId/books/:title"
          render={(props) => (
            <ViewBook
              {...props}
              books={this.state.books}
              removeBook={this.removeBook}
              // putBook={this.putBook}
            />
          )}
        />
        <Route
          path="/:clubId/books/newbook"
          render={(props) => <CreateBook {...props} postBook={this.postBook} />}
        />
        <Route
          path="/:clubId/book/:id/edit"
          render={(props) => {
            const bookId = props.match.params.id;
            const book = this.state.books.find(
              (book) => book.id === parseInt(bookId)
            );
            return <EditBook {...props} book={book} putBook={this.putBook} />;
          }}
        />
      </>
    );
  }
}

// Link to =`/${clubId}/books/newbook`
export default withRouter(Main);
