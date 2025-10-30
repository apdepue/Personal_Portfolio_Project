import React from "react";
import TaskCard from "./TaskCard";
import './TaskContainer.css';

export default class TaskContainer extends React.Component {
  render() {
    const tasks = this.props.tasks;
    const deleteTask = this.props.deleteTask;

    const taskList = tasks.map( task =>
        <TaskCard
            front = {task.front} 
            back = {task.back} 
            key = {task.front}
            deleteTask = {deleteTask}/>
        );

    return (
        <section className="tasks-container">
            {taskList}
        </section>
    )
  }
}