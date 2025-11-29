import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskContainer from './components/TaskContainer';
import Contact from './components/contact';

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
          <Router>
          <div className="App">
            <header className="App-header">
              <Navbar />
              <h2>To-Do List</h2>
              <main>
                <TaskForm addTask={this.addTask}/>
                <TaskContainer tasks={this.state.tasks} deleteTask={this.deleteTask} />
              </main>
            </header>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      );
    }
}

export default App;
