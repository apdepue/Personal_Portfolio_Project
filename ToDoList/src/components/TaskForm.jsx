import React from "react";
import "./TaskForm.css";

class TaskForm extends React.Component {
  frontRef = React.createRef();
  backRef = React.createRef();
  handleSubmit = (e) => {
        e.preventDefault();

        const enField = this.frontRef.current;
        const deField = this.backRef.current;
        
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
                  English:
                  <input type="text" name="en" placeholder="English Task" required 
                  ref={this.frontRef}/>
                </label>
              </div>
              <div className="form-row">
                <label>
                  German:
                  <input type="text" name="de" placeholder="German Task" required 
                  ref={this.backRef}/>
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