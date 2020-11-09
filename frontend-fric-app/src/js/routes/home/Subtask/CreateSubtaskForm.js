import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Tooltip = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        <p>Handle Subtask Assignments</p>
        <p> Subtask Title: Title of a subtask </p>
        <p> Subtask Description: Description of a subtask </p>
        <p> Due Date: Due Date of a subtask </p>
        <p> Progress: Progress of a subtask </p>
        <p> Analyst: Analysts who are assigned to the subtask </p>
        <p> Collaborator: Collaborators who are assigned to the subtask </p>
        <p> Tasks: Name of a task </p>
        <p> Subtasks: Association of other subtasks </p>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class CreateSubtask extends Component {
  constructor(props) {
    super(props);

    this.onChangeSubtaskTitle = this.onChangeSubtaskTitle.bind(this);
    this.onChangeSubtaskDescription = this.onChangeSubtaskDescription.bind(this);
    this.onChangeSubtaskProgress = this.onChangeSubtaskProgress.bind(this);
    // this.onChangeSubtaskDuedate = this.onChangeSubtaskDuedate.bind(this); BREAKS
    this.onChangeSubtaskAnalyst = this.onChangeSubtaskAnalyst.bind(this);
    this.onChangeSubtaskCollaborator = this.onChangeSubtaskCollaborator.bind(this);
    this.onChangeSubtaskParenttask = this.onChangeSubtaskParenttask.bind(this);
    this.onChangeSubtaskRelatedsubtasks = this.onChangeSubtaskRelatedsubtasks.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      subtasktitle: "",
      subtaskdescription: "",
      subtaskprogress: "",
      subtaskduedate: "",
      subtaskanalyst: "",
      subtaskcollaborator: "",
      subtaskparenttask: "",
      subtaskrelatedsubtasks: "",
    };
  }

  onChangeSubtaskTitle(e) {
    this.setState({
      subtasktitle: e.target.value,
    });
  }

  onChangeSubtaskDescription(e) {
    this.setState({
      subtaskdescription: e.target.value,
    });
  }

  onChangeSubtaskProgress(e) {
    this.setState({
      subtaskprogress: e.target.value,
    });
  }

  onChangeSubtaskDuedate(e) {
    this.setState({
      subtaskduedate: e.target.value,
    });
  }

  onChangeSubtaskAnalyst(e) {
    this.setState({
      subtaskanalyst: e.target.value,
    });
  }

  onChangeSubtaskCollaborator(e) {
    this.setState({
      subtasktitle: e.target.value,
    });
  }

  onChangeSubtaskParenttask(e) {
    this.setState({
      subtaskparenttask: e.target.value,
    });
  }

  onChangeSubtaskRelatedsubtasks(e) {
    this.setState({
      subtaskrelatedsubtasks: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

      console.log("Subask Submitted");
      console.log(`Title: ${this.state.subtasktitle}`);
      console.log(`Description: ${this.state.subtaskdescription}`);
      console.log(`Due Date: ${this.state.subtaskduedate}`);
      console.log(`Progress: ${this.state.subtaskprogress}`)
      console.log(`Analyst: ${this.state.subtaskanalyst}`);
      console.log(`Collaborator: ${this.state.subtaskcollaborator}`);
      console.log(`Subtasks: ${this.state.subtaskrelatedsubtasks}`);

      const newSubtask = {
        subtasktitle: this.state.subtasktitle,
        subtaskdescription: this.state.subtaskdescription,
        subtaskduedate: this.state.subtaskduedate,
        subtaskprogress: this.state.subtaskprogress,
        subtaskanalyst: this.state.subtaskanalyst,
        subtaskcollaborator: this.state.subtaskcollaborator,
        subtaskparenttask: this.state.subtaskparenttask,
        subtaskrelatedsubtasks: this.state.subtaskrelatedsubtasks,
      };

      const newHistory = {
        action: "Subtask Edited",
        analyst: "",
      };

      axios
      .post("http://localhost:4000/home/subtasks/new", newSubtask) //double check this
      .then((res) => console.log(res.data));

      axios
      .post("http://localhost:4000/history/new", newHistory)
      .then((res) => console.log(res.data));

      this.setState({
        subtasktitle: "",
        subtaskdescription: "",
        subtaskduedate: "",
        subtaskprogress: "",
        subtaskanalyst: "",
        subtaskcollaborator: "",
        subtaskparenttask: "",
        subtaskrelatedsubtasks: "",
      });

  }

  // what you see
  render() {
    return (
      // x_panel is container
      <div class="x_panel">
        <div class="x_title">
          <h2>
            Create Subtask <Tooltip />
          </h2>

          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form onSubmit={this.onSubmit}>
            {/* Task name */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">Subtask Title</label>
              <div class=" col-sm-10 ">
                <input type="text" class="form-control" value={this.state.subtasktitle}
                  onChange={this.onChangeSubtaskTitle}/>
              </div>
            </div>
            {/* Task Description */}
            <div class="form-group row">
              <label class="control-label col-sm-2">Subtask Description</label>
              <div class=" col-sm-10">
                <textarea class="form-control" rows="4" value={this.state.subtaskdescription}
                  onChange={this.onChangeSubtaskDescription}></textarea>
              </div>
            </div>
            {/* Progress */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">Progress</label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control" value={this.state.subtaskprogress}
                  onChange={this.onChangeSubtaskProgress}/>
              </div>
            </div>
            {/* Due Date */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Due date</label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control"  />
              </div>
            </div>
            {/* Analyst*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">Analysts</label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.subtaskanalyst}
                  onChange={this.onChangeSubtaskAnalyst}></select>
              </div>
            </div>
            {/* Collaborator*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Collaborator
              </label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.subtaskcollaborator}
                  onChange={this.onChangeSubtaskCollaborator}></select>
              </div>
            </div>
            {/* Tasks */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Tasks</label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.subtaskparenttask}
                  onChange={this.onChangeSubtaskParenttask}></select>
              </div>
            </div>
            {/* Related Subtasks */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Subtasks</label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control" value={this.state.subtaskrelatedsubtasks}
                  onChange={this.onChangeSubtaskRelatedsubtasks}></select>
              </div>
            </div>
            {/* Buttons */}
            <br />
            <div class="item form-group">
              <button class="btn btn-primary" type="submit" value="Save Task">
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

export default CreateSubtask;
