import React from "react";
import "./TaskForm.css";

class TaskForm extends React.Component {
  frontRef = React.createRef();
  detailRef = React.createRef();
  backRef = React.createRef();
  handleSubmit = (e) => {
        e.preventDefault();

        const enField = this.frontRef.current;
        const deField = this.detailRef.current;

        const enValue = enField.value;
        const deValue = deField.value;

        enField.value = '';
        deField.value = '';
        
        this.props.addTask(enValue, deValue);
  }

  render() {
    return (
      <section className="card-form">
            <h2>Add New Task</h2>
            <form action="#" method="GET" onSubmit={this.handleSubmit}>
              <div className="form-row">
                <label>
                  Task Name:
                  <input type="text" name="en" placeholder="Name your activity" required 
                  ref={this.frontRef}/>
                </label>
                <label>
                  Task description:
                  <input type="html" name="de" placeholder="Creat a task" required 
                  ref={this.detailRef}/>
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
}
export default TaskForm;