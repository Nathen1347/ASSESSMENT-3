import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    handleClick(){
        return this.props.filterBooks;
    }

    handleClear(){
        this.setState({userInput: ''})
    }
    render(){
        return(
            <div>
                <input onChange={ (e) => this.handleChange(e.target.value)} />
                <button onClick={ () => this.handleClick(this.state.input)}>search</button>
                <button onClick={()=> this.handleClear(this.state.input)}>clear search</button>
            </div>
        )
    }
}
export default SearchBar