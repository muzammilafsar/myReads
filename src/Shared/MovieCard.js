import React from 'react';
const MovieCard = (props) => {

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${(props.book.imageLinks && props.book.imageLinks.smallThumbnail)? props.book.imageLinks.smallThumbnail: ''}")` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={(e) => {props.selectChanged(e, props.book)}} defaultValue={props.book.shelf || 'none'}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="read" >Read</option>
                        <option value="none" >None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors"></div>
        </div>
    )
}
export default MovieCard;