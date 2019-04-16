import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
class Home extends Component {
    state = {
        shelfs: [
            {
                title: 'Currently Reading',
                key: 'currentlyReading'
            },
            {
                title: "Want To Read",
                key: "wantToRead"
            },
            {
                title: "Read",
                key: "read"
            }
        ]
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {
                        this.state.shelfs.map(shelf => (
                            <div key={shelf.key}>
                                <BookShelf books={this.props.books.filter(val => val.shelf === shelf.key)} title={shelf.title} selectChanged={this.props.selectChanged}/>
                            </div>
                        ))
                    }
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}
export default Home;