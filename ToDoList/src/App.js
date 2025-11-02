import React from 'react';

import TaskForm from './components/TaskForm';
import TaskContainer from './components/TaskContainer';

import './App.css';

class App extends React.Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    fetch('./constants/tasks.json')
      .then( data => data.json())
      .then( tasks =>this.setState({tasks}));
  }

  addTask = (front, detail) => {
  const newTasks = [...this.state.tasks, {front, detail}];
  this.setState({tasks: newTasks});
  }
  deleteTask = (front) => {
  const newTasks = this.state.tasks.filter( task => task.front !== front);
  this.setState({tasks: newTasks});
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h2>To-Do List</h2>
            <main>
              <TaskForm  addTask={this.addTask}/>
              <TaskContainer tasks={this.state.tasks} deleteTask={this.deleteTask} />
            </main>
          </header>
        </div>
      );
    }
}

export default App;
