import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import data from './data';
import SearchBar from './Components/SearchBar';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf(value){
    let shelf = [];
    let books = shelf.push(value);
    return books;
  }

  clearShelf(){

  }

  filterBooks(input){
    let filteredBooks = this.state.books.filter(function (e){
      return e.input === input;
    })

    this.setState({filteredBooks: filteredBooks})
  }
  reset(){

  }

  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar key={this.props.filterBooks}/>
        <BookList />
        <Shelf />
      </div>
    );
  }
}

export default App;
