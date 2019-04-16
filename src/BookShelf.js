import React from 'react';
import MovieCard from './Shared/MovieCard';
class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => (
                        <li key={book.id}>
                            <MovieCard book={book} selectChanged={this.props.selectChanged} />
                        </li>
                    ))}
                    
                    </ol>
                </div>
            </div>
        )
    }
}
export default BookShelf;