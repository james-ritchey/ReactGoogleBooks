import React, { Component } from "react";
import ListArea from "../components/ListArea";
import API from "../utils/API";
import SavedBookItem from "../components/SavedBookItem";


class Search extends Component { 
    
    state = {
        books: [],
        currentList: "Saved"
    }

    componentDidMount = () => {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res =>
          this.setState({ books: res.data})
        )
        .catch(err => console.log(err));
    }

    deleteBook = key => {
        console.log(key);
        API.deleteBook(key)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.search) {
          this.searchBooks();
        }
    }

    render() {
        return(
            <div>
                <ListArea>
                    <h3>{this.state.currentList}</h3>
                    {this.state.books.map(book => (
                        <SavedBookItem key={book.googleId} bookData={book} deleteBook={this.deleteBook}/>
                    ))}
                </ListArea>

            </div>
        )
    };
}

export default Search;