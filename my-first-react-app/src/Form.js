import { Component } from "react";
import React from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { input: ''};
    }
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.handleChange}>Submit</button>
                <p>You typed: {this.state.input}</p>
            </div>
        );
    }
}