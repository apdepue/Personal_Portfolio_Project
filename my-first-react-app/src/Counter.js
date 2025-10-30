import React, { Component } from 'react';

class Counter extends Component {
constructor(props) {
super(props);
this.state = { count: 0 };
this.increment = this.increment.bind(this); // Bind methods
this.decrement = this.decrement.bind(this);
}
increment() {
    if (this.state.count <20) {
        this.setState({ count: this.state.count + 1 });      
    }
    else {
        alert("Count cannot exceed 20");
    }
}
decrement() {
    if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
    }
    else {
        alert("Count cannot be negative");
    }
}
render() {
return (
<div>
<h1>Count: {this.state.count}</h1>
<button onClick={this.increment}>Increment</button>
<button onClick={this.decrement}>Decrement</button>
</div>
);
}
}

export default Counter;