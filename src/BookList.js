import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'

class BookList extends React.Component {
  constructor(){
    super();
    this.state = {
      selectBoxPopupContent: [
        {
          text: "Move to",
          select: "MOVE_TO",
          disable: true,
        },
        {
          text: "Currently Reading",
          select: "currentlyReading",
          disable: false,
        },
        {
          text: "Want To Read",
          select: "wantToRead",
          disable: false,
        },
        {
          text: "Read",
          select: "read",
          disable: false,
        },
        {
          text: "None",
          select: "none",
          disable: false,
        },
      ],
    }
  }
  gotoUpdateShelfWrap = (shelf, book) => {
    this.props.updateBookShelf(shelf, book);
  }

  render() {
    const { completeBookList } = this.props;
    const { selectBoxPopupContent, shelfSelected} = this.state;
    const currentlyReading = completeBookList.filter( book => book.shelf === "currentlyReading");
    const wantToRead = completeBookList.filter( book => book.shelf === "wantToRead");
    const read = completeBookList.filter( book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {currentlyReading.map((node,index) => (
                  <li key={index}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${node.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue={node.shelf} onChange={(event) => this.gotoUpdateShelfWrap(event.target.value, {id: node.id})} >
                            {selectBoxPopupContent.map((selectNode, selectIndex) => (
                              <option
                                key={selectNode.select}
                                value={selectNode.select}
                                disabled={selectNode.disable === true ? true : false}>
                              {selectNode.text}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{node.title}</div>
                      <div className="book-authors">{node.authors[0]}</div>
                    </div>
                  </li>
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {wantToRead.map((node,index) => (
                  <li key={index}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${node.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue={node.shelf} onChange={(event) => this.gotoUpdateShelfWrap(event.target.value, {id: node.id})} >
                            {selectBoxPopupContent.map((selectNode, selectIndex) => (
                              <option key={selectNode.select}
                                value={selectNode.select}
                                disabled={selectNode.disable === true ? true : false}>
                              {selectNode.text}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{node.title}</div>
                      <div className="book-authors">{node.authors[0]}</div>
                    </div>
                  </li>
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {read.map((node,index) => (
                  <li key={index}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${node.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <select defaultValue={node.shelf} onChange={(event) => this.gotoUpdateShelfWrap(event.target.value, {id: node.id})} >
                          {selectBoxPopupContent.map((selectNode, selectIndex) => (
                            <option key={selectNode.select}
                              value={selectNode.select}
                              disabled={selectNode.disable === true ? true : false}>
                            {selectNode.text}
                            </option>
                          ))}
                        </select>
                        </div>
                      </div>
                      <div className="book-title">{node.title}</div>
                      <div className="book-authors">{node.authors[0]}</div>
                    </div>
                  </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/booksearch"  />
        </div>
      </div>
      )
    }
  }

export default BookList
