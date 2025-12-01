import React, { useState } from "react";
import TaskCard from "./TaskCard";
import './TaskContainer.css';

function TaskContainer({ tasks, deleteTask, updateTaskCompletion }) {
  const [sortBy, setSortBy] = useState('all');

  const sortedTasks = [...tasks]
    .filter(task => {
      if (sortBy === 'complete') return task.back === true;
      if (sortBy === 'incomplete') return task.back === false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'complete') {
        return b.back - a.back;
      }
      if (sortBy === 'incomplete') {
        return a.back - b.back;
      }
      return 0;
    });

  const taskList = sortedTasks.map((task, idx) =>
    <TaskCard
      id={task.id ?? `${task.front}-${idx}`}
      front={task.front}
      detail={task.detail}
      back={task.back} 
      key={task.id ?? `${task.front}-${idx}`}
      deleteTask={deleteTask}
      updateTaskCompletion={updateTaskCompletion}
    />
  );

  return (
    <section className="tasks-container">
      <div className="sort-buttons">
        <button 
          className={sortBy === 'all' ? 'active' : ''} 
          onClick={() => setSortBy('all')}
        >
          All Tasks
        </button>
        <button 
          className={sortBy === 'incomplete' ? 'active' : ''} 
          onClick={() => setSortBy('incomplete')}
        >
          Incomplete
        </button>
        <button 
          className={sortBy === 'complete' ? 'active' : ''} 
          onClick={() => setSortBy('complete')}
        >
          Complete
        </button>
      </div>
      {taskList}
    </section>
  );
}

export default TaskContainer;