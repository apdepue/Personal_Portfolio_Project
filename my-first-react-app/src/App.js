import logo from './logo.svg';
import './App.css';
//import Name from './name.js';
//import Button from './Button.js';
import Counter from './Counter.js';
import Form from './Form.js';

function App() {
  const lbl = "Click Me";
  const handleClick = () => {
    alert('Button Clicked!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <hr></hr>
      <Counter />
      <hr></hr>
    </div>
  );
}

export default App;