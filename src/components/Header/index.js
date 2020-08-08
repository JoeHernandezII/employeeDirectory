import React, { Component } from "react";

class Header extends Component {
    state = {
        userInput: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        
        event.preventDefault();
        if (!this.state.userInput) {
            alert("Enter a search term before submitting.");
        } else {
            alert("form submitted");
            console.log(this.state.userInput);
        }
        this.setState({
            userInput: ""
        });
    };


    render() {
        return (
            <nav class="navbar navbar-light bg-light" >
                <h1 class="navbar-brand">Employee Directory</h1>
                <form class="form-inline">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        name="userInput" />
                    <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={this.handleFormSubmit}
                    >Search</button>
                </form>
            </nav>)
    }
}

export default Header;