import React, { useRef } from "react";
import "./TaskForm.css";

function TaskForm({ addTask }) {
  const frontRef = useRef(null);
  const detailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enField = frontRef.current;
    const deField = detailRef.current;

    const enValue = enField.value;
    const deValue = deField.value;

    enField.value = '';
    deField.value = '';
    
    addTask(enValue, deValue);
  }

  return (
    <section className="card-form">
      <h2>Add New Task</h2>
      <form action="#" method="GET" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Task Name:
            <input type="text" name="en" placeholder="Name your activity" required 
            ref={frontRef}/>
          </label>
          <label>
            Task description:
            <input type="html" name="de" placeholder="Creat a task" required 
            ref={detailRef}/>
          </label>
        </div>
        <div className="form-row">
          <label>
          </label>
        </div>
        <div className="form-row">
        <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;