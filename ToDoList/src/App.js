import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskContainer from './components/TaskContainer';
import Contact from './components/contact';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('./constants/tasks.json')
      .then(res => res.json())
      .then(tasks => {
        const seeded = (tasks || []).map((t, idx) => ({
          id: t.id ?? `t-${Date.now()}-${idx}`,
          front: t.front,
          detail: t.detail,
          back: t.back ?? false
        }));
        setTasks(seeded);
      })
      .catch(err => {
        console.error('Failed to load tasks.json', err);
      });
  }, []);

  const addTask = (front, detail) => {
    const id = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : `t-${Date.now()}`;
    setTasks([...tasks, { id, front, detail, back: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTaskCompletion = (id, isCompleted) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, back: isCompleted } : task
    ));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <h2>To-Do List</h2>
              <main>
                <TaskForm addTask={addTask}/>
                <TaskContainer tasks={tasks} deleteTask={deleteTask} updateTaskCompletion={updateTaskCompletion} />
              </main>
            </header>
          </div>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
