import React, { Component } from 'react';

class LifecycleDemo extends Component { 
constructor(props) { 
super(props); 
console.log('Constructor'); 
this.state = { count: 0 }; 
} 
 componentDidMount() { 
    console.log('Mounted'); 
    this.interval = setInterval(() => {
      this.setState(prev => {
        if (prev.count === 10) {
          return { count: 0 };
        }
        return { count: prev.count + 1 };
      });
    }, 1000);
  }

componentDidUpdate(prevProps, prevState) { 
if (prevState.count !== this.state.count) { 
console.log('Updated'); 
} 

} 
componentWillUnmount() { 
console.log('Unmounting'); 
clearInterval(this.interval); 
} 
render() { 
console.log('Render'); 
return <h1>Count: {this.state.count}</h1>; 
} 
}

export default LifecycleDemo;