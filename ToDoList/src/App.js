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
      .then(res => res.json())
      .then(tasks => {
        const seeded = (tasks || []).map((t, idx) => ({
          id: t.id ?? `t-${Date.now()}-${idx}`,
          front: t.front,
          detail: t.detail,
          back: t.back ?? false
        }));
        this.setState({ tasks: seeded });
      })
      .catch(err => {
        console.error('Failed to load tasks.json', err);
      });
  }

  addTask = (front, detail) => {
    const id = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : `t-${Date.now()}`;
    const newTasks = [...this.state.tasks, { id, front, detail, back: false }];
    this.setState({ tasks: newTasks });
  }

  deleteTask = (id) => {
    this.setState(prev => ({ tasks: prev.tasks.filter(task => task.id !== id) }));
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h2>To-Do List</h2>
            <main>
              <TaskForm addTask={this.addTask}/>
              <TaskContainer tasks={this.state.tasks} deleteTask={this.deleteTask} />
            </main>
          </header>
        </div>
      );
    }
}

export default App;
