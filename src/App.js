import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBar from './SearchBar';
import BookList from './BookList';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        completeBookList: [],
        searchedBookList: []
      };
      this.updateBookShelf = this.updateBookShelf.bind(this);
      this.getSearchedBookList = this.getSearchedBookList.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((completeBookList) => { this.setState({completeBookList}) });
  }

  updateBookShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then((updatedBookList) => { this.getAllBooks(); });
  }

  getSearchedBookList = (query, bookList) => {
    BooksAPI.search(query, 20).then((searchedBookList) => {
      this.setState({ searchedBookList });
    });
  }

  render() {
    return (
      <div className="app" >
        <Route exact path="/" render={() => (
           <BookList
              completeBookList={this.state.completeBookList}
              updateBookShelf={this.updateBookShelf}
            />
        )} />
        <Route exact path="/booksearch" render={() => (
           <SearchBar
              searchedBookList={this.state.searchedBookList}
              getSearchedBookList={this.getSearchedBookList}
              updateBookShelf={this.updateBookShelf}
              completeBookList={this.state.completeBookList}
           />
        )} />
      </div>
    )
  }
}

export default BooksApp
