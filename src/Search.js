import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './Shared/MovieCard';
import { search as searchAPI, getAll } from './BooksAPI';

const SearchItems = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun',
 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'];

class Search extends Component {
    state = {
        searchValue: '',
        foundBooks: []
    }
    search = (state) => {
        if (state.searchValue.trim() === '')
            this.setState({ foundBooks: [] });
        else {
            let found = SearchItems.find(val => val.toLowerCase() === state.searchValue.toLowerCase());
            if(found) {
                searchAPI(state.searchValue).then(foundBooks => {
                    if (foundBooks.error) {
                        return;
                    }
                    getAll().then(allBooks => {
                        const matchedBooks = foundBooks.map(
                            search => allBooks.find(val => val.id === search.id) || search
                        );
                        this.setState({ foundBooks: matchedBooks });
                    })
                });
            } else {
                this.setState({foundBooks: []});
            }

        }

    }
    componentWillUpdate(Prev, nextState) {
        if (this.state.searchValue !== nextState.searchValue) {
            this.search(nextState);
        }
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e) => { this.setState({ searchValue: e.target.value }); }} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.foundBooks.map(book => (
                            <li key={book.id}>
                                <MovieCard book={book} selectChanged={this.props.selectChanged} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}
export default Search;