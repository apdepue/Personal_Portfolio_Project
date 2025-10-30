import React from 'react';

import WordForm from './components/WordForm';
import CardsContainer from './components/CardsContainer';
import LifecycleDemo from './lifeCycleDemo';
import EffectDemo from './effectDemo';

import './App.css';

class App extends React.Component {
  state = {
    words: []
  };

  componentDidMount() {
    fetch('./constants/words.json')
      .then( data => data.json())
      .then( words =>this.setState({words}));
  }

  addWord = (front, back) => {
  const newWords = [...this.state.words, {front, back}];
  this.setState({words: newWords});
  }
  deleteWord = (front) => {
  const newWords = this.state.words.filter( word => word.front !== front);
  this.setState({words: newWords});
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            Dictionary App
            <main>
              <WordForm  addWord={this.addWord}/>
              <CardsContainer words={this.state.words} deleteWord={this.deleteWord} />
              <LifecycleDemo />
              <EffectDemo />
            </main>
          </header>
        </div>
      );
    }
}

export default App;
