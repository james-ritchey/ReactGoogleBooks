import React, { Component } from "react";
import { Input, FormBtn } from "../components/SearchBar";
import ListArea from "../components/ListArea";
import API from "../utils/API";
import BookItem from "../components/BookItem";


class Search extends Component { 
    
    state = {
        search: "",
        books: [],
        currentList: "Results"
    }

    searchBooks = () => {
        API.searchBook("?q=" + this.state.search).then(res => {
            var books = [];
            res.data.forEach(i => {
                var temp = {
                    key: i.id,
                    title: i.volumeInfo.title,
                    authors: i.volumeInfo.authors,
                    image: i.volumeInfo.imageLinks.thumbnail,
                    link: i.volumeInfo.infoLink,
                    description: i.volumeInfo.description
                }
                books.push(temp);
            });
            this.setState({books: books});
            console.log("Books in state:");
            console.log(this.state.books);
        });
    }

    saveBook = book => {
        API.saveBook({
            title: book.title,
            authors: book.authors,
            link: book.link,
            description: book.description,
            image: book.image,
            googleId: book.key
          })
            .then(res => book)
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
                <Input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Search for a book..."
                />
                <FormBtn
                    onClick={this.handleSubmit}
                ></FormBtn>
                <ListArea>
                    <h3>{this.state.currentList}</h3>
                    {this.state.books.map(book => (
                        <BookItem key={book.key} bookData={book} saveBook={this.saveBook}/>
                    ))}
                </ListArea>

            </div>
        )
    };
}

export default Search;