import React, {Component} from 'react';
import {Paper, TextField} from '@material-ui/core';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        searchTerm: '',
    }
    handleSubmit = event => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();

    }
    handleChange = event => this.setState({searchTerm: event.target.value});

    render(){
        return(
            <Paper elevation={3}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label='Buscar' className='searchbar' onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
};
export default SearchBar;