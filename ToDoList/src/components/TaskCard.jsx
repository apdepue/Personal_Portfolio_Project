import React, { useState } from "react";
import "./TaskCard.css";

function TaskCard({ id, front, detail, back, deleteTask, updateTaskCompletion }) {
  const [isCompleted, setIsCompleted] = useState(back);

  const handleFlip = (e) => {
    e.stopPropagation();
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    updateTaskCompletion(id, newStatus);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const taskId = id ?? front;
    if (typeof deleteTask === 'function') {
      deleteTask(taskId);
    }
  };

  const cardContent = !isCompleted ? (
    <div className="card-front">
      <h3 className="task-title">{front}</h3>
      {detail ? <p className="task-detail-preview">{detail}</p> : null}
    </div>
  ) : (
    <div className="card-back">
      <p className="task-completed">Complete!</p>
      <h3>{front}</h3>
      <p>{detail || "No details provided."}</p>     
    </div>
  );

  return (
    <div className={`task-card ${isCompleted ? 'completed' : 'incomplete'} ${isCompleted ? 'flipped' : ''}`} onClick={handleFlip}>
      <span className="delete-card" onClick={handleDelete}>×</span>
      {cardContent}
    </div>
  );
}

export default TaskCard;