import React from "react";
import TaskCard from "./TaskCard";
import './TaskContainer.css';

export default class TaskContainer extends React.Component {
  render() {
    const tasks = this.props.tasks;
    const deleteTask = this.props.deleteTask;

    const taskList = tasks.map((task, idx) =>
        <TaskCard
            id={task.id ?? `${task.front}-${idx}`}
            front={task.front}
            detail={task.detail}
            back={task.back} 
            key={task.id ?? `${task.front}-${idx}`}
            deleteTask={deleteTask}/>
        );

    return (
        <section className="tasks-container">
            {taskList}
        </section>
    )
  }
}