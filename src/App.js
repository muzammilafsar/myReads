import React, { Component } from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import { getAll, update } from './BooksAPI';
class App extends Component {
  state = {
    allBooks: []
  }
  componentWillMount() {
    this.getAllBooks();
  }
  getAllBooks() {
        getAll().then(val => {
          console.log(val);
          this.setState({
            allBooks: val
          });
        });
  }
  selectChanged=(event, book)=> {
    update(book, event.target.value).then(val => {
      this.getAllBooks();
    })
  }
  render() {
    return (
      <div className="app">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home books={this.state.allBooks} selectChanged={this.selectChanged} />} ></Route>
        <Route exact path="/search" render={() => <Search selectChanged={this.selectChanged} />} ></Route>

      </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
