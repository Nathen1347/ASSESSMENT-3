import React, { Component } from 'react';
import App from '../App';
import data from '../data';

class BookList extends Component{
    constructor(props){
        super(props)
        this.state = {
            books: data
        }
    }

    render(){

       const mappedBooks = this.state.books.map((books) => (
            <div>
                    <div>{books.id}</div>
                    <div>{books.title}</div>
                    <div>{books.author}</div>
                    <img onClick={() => this.props.addShelf} src={books.img} />
            </div>
                ));
        
        return(
            <div>{mappedBooks}</div>
        )
    }
}
export default BookList