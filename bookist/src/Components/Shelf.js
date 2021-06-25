import React, { Component } from 'react';
import App from '../App';
import data from '../data';


class Shelf extends Component{
    constructor(props){
        super(props)
        this.state = {
            shelf:[]
        }

    }

    render(){
        const mappedTitles = this.state.shelf.map((shelf) => (
            <div>
                <div>{this.shelf.title}</div>
            </div>
                ));
        return(
            <div>
                <h1>shelf</h1>
                <h2>{mappedTitles}</h2>
                <button onClick={this.props.clearShelf}>clear shelf</button>
            </div>
        )
    }
}
export default Shelf
                    
                    