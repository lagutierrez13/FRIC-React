import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Tooltip = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Fill out Task Information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class DetailedView extends Component {
  constructor(props) {
    super(props);

    this.onChangeTaskTitle = this.onChangeTaskTitle.bind(this);
    this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
    this.onChangeTaskDueDate = this.onChangeTaskDueDate.bind(this);
    this.onChangeTaskSystem = this.onChangeTaskSystem.bind(this);
    this.onChangeTaskPriority = this.onChangeTaskPriority.bind(this);
    this.onChangeTaskAnalyst = this.onChangeTaskAnalyst.bind(this);
    this.onChangeTaskCollaborator = this.onChangeTaskCollaborator.bind(this);
    this.onChangeRelatedTasks = this.onChangeRelatedTasks.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tasktitle: "",
      taskdescription: "",
      taskduedate: "",
      tasksystem: "",
      taskpriority: "",
      taskanalyst: "",
      taskcollaborator: "",
      relatedtasks: "",
    };
  }

    onChangeTaskTitle(e) {
      this.setState({
        tasktitle: e.target.value,
      });
    }

    onChangeTaskDescription(e) {
      this.setState({
        taskdescription: e.target.value,
      });
    }

    onChangeTaskDueDate(e) {
      this.setState({
        taskduedate: e.target.value,
      });
    }

    onChangeTaskSystem(e) {
      this.setState({
        tasksystem: e.target.value,
      });
    }

    onChangeTaskPriority(e) {
      this.setState({
        taskpriority: e.target.value,
      });
    }

    onChangeTaskAnalyst(e) {
      this.setState({
        taskanalyst: e.target.value,
      });
    }

    onChangeTaskCollaborator(e) {
      this.setState({
        taskcollaborator: e.target.value,
      });
    }

    onChangeRelatedTasks(e) {
      this.setState({
        relatedtasks: e.target.value,
      });
    }

    onSubmit(e) {
      e.preventDefault();

      console.log("Task Submitted");
      console.log(`Title: ${this.state.tasktitle}`);
      console.log(`Description: ${this.state.taskdescription}`);
      console.log(`Due Date: ${this.state.taskduedate}`);
      console.log(`System: ${this.state.tasksystem}`);
      console.log(`Priority: ${this.state.taskpriority}`);
      console.log(`Analyst: ${this.state.taskanalyst}`);
    
      const newTask = {
        tasktitle: this.state.tasktitle,
        taskdescription: this.state.taskdescription,
        taskduedate: this.state.taskduedate,
        tasksystem: this.state.tasksystem,
        taskpriority: this.state.taskpriority,
        taskanalyst: this.state.taskanalyst,
        taskcollaborator: this.state.taskcollaborator,
        relatedtasks: this.state.relatedtasks,
      };

      const newHistory = {
        action: `Task ${this.state.title} Edited`,
        analyst: "",
      };

      axios
      .post("http://localhost:4000/home/tasks/new", newTask)
      .then((res) => console.log(res.data));

      axios
      .post("http://localhost:4000/history/new", newHistory)
      .then((res) => console.log(res.data));

      this.setState({
        tasktitle: "",
        taskdescription: "",
        taskduedate: "",
        tasksystem: "",
        taskpriority: "",
        taskanalyst: "",
        taskcollaborator: "",
        relatedtasks: "",
      });
  }

  render() {
    return (
      // x_panel is container
      <div class="x_panel">
        <div class="x_title">
          <h2>
            Task <Tooltip />
          </h2>

          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form onSubmit={this.onSubmit}> 
            {/* Task name */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">Task Title</label>
              <div class=" col-sm-10 ">
                <input 
                type="text" 
                class="form-control" 
                value={this.state.tasktitle}
                onChange={this.onChangeTaskTitle} 
                />
              </div>
            </div>
            {/* Task Description */}
            <div class="form-group row">
              <label class="control-label col-sm-2">Task Description</label>
              <div class=" col-sm-10">
                <textarea class="form-control" rows="4" value={this.state.taskdescription}
                  onChange={this.onChangeTaskDescription}></textarea>
              </div>
            </div>
            {/* Due Date */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Due date</label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control" value={this.state.taskduedate}
                  onChange={this.onChangeTaskDueDate} />
              </div>
            </div>
            {/* System */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">System</label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.tasksystem}
                  onChange={this.onChangeTaskSystem}></select>
              </div>
            </div>
            {/* Priority */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">Priority</label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.taskpriority}
                  onChange={this.onChangeTaskPriority}></select>
              </div>
            </div>
            {/* Analyst*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">Analysts</label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.taskanalyst}
                  onChange={this.onChangeTaskAnalyst}></select>
              </div>
            </div>
            {/* Collaborator*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Collaborator
              </label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.taskcollaborator}
                  onChange={this.onChangeTaskCollaborator}></select>
              </div>
            </div>
            {/* Related Tasks */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">
                Related Tasks
              </label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.relatedtasks}
                  onChange={this.onChangeRelatedTasks}></select>
              </div>
            </div>
            {/* Buttons */}
            <br />
            <div class="item form-group">
              <button class="btn btn-primary" type="submit" value="Save Task" onClick={() => window.location.reload(false)}>
                Save
              </button>
              <button class="btn btn-danger" type="cancel">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DetailedView;
