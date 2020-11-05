import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Tooltip = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Fill out Subtask Information
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
    this.onChangeSubtaskDescription = this.onChangeSubtaskDescription.bind(
      this
    );
    this.onChangeSubtaskProgress = this.onChangeSubtaskProgress.bind(this);
    // this.onChangeSubtaskDuedate = this.onChangeSubtaskDuedate.bind(this); BREAKS
    this.onChangeSubtaskAnalyst = this.onChangeSubtaskAnalyst.bind(this);
    this.onChangeSubtaskCollaborator = this.onChangeSubtaskCollaborator.bind(
      this
    );
    this.onChangeSubtaskParenttask = this.onChangeSubtaskParenttask.bind(this);
    this.onChangeSubtaskRelatedsubtasks = this.onChangeSubtaskRelatedsubtasks.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      duedate: "",
      analyst: "",
      collaborator: "",
      parent: "",
      relatedsubtask: "",
      no_of_findings: 0,
      progress: 0,
    };
  }

  onChangeSubtaskTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeSubtaskDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeSubtaskProgress(e) {
    this.setState({
      progress: e.target.value,
    });
  }

  onChangeSubtaskDuedate(e) {
    this.setState({
      duedate: e.target.value,
    });
  }

  onChangeSubtaskAnalyst(e) {
    this.setState({
      analyst: e.target.value,
    });
  }

  onChangeSubtaskCollaborator(e) {
    this.setState({
      collaborator: e.target.value,
    });
  }

  onChangeSubtaskParenttask(e) {
    this.setState({
      parent: e.target.value,
    });
  }

  onChangeSubtaskRelatedsubtasks(e) {
    this.setState({
      relatedsubtask: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Subask Submitted");
    console.log(`Title: ${this.state.title}`);
    console.log(`Description: ${this.state.description}`);
    console.log(`Due Date: ${this.state.duedate}`);
    console.log(`Analyst: ${this.state.analyst}`);
    console.log(`Collaborator: ${this.state.collaborator}`);
    console.log(`Subtasks: ${this.state.relatedsubtask}`);
    console.log(`Findings: ${this.state.no_of_findings}`);
    console.log(`Progress: ${this.state.progress}`);

    const newSubtask = {
      title: this.state.title,
      description: this.state.description,
      duedate: this.state.duedate,
      analyst: this.state.analyst,
      collaborator: this.state.collaborator,
      parent: this.state.parent,
      relatedsubtask: this.state.relatedsubtask,
      no_of_findings: this.state.no_of_findings,
      progress: this.state.progress,
    };

    const newHistory = {
      action: `Subtask ${this.state.title} created`,
      analyst: "",
    };

    axios
      .post("http://localhost:4000/home/subtasks/new", newSubtask) //double check this
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:4000/history/new", newHistory)
      .then((res) => console.log(res.data));

    this.setState({
      title: "",
      description: "",
      duedate: "",
      progress: "",
      analyst: "",
      collaborator: "",
      parent: "",
      relatedsubtask: "",
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
                <input
                  type="text"
                  class="form-control"
                  value={this.state.subtasktitle}
                  onChange={this.onChangeSubtaskTitle}
                />
              </div>
            </div>
            {/* Task Description */}
            <div class="form-group row">
              <label class="control-label col-sm-2">Subtask Description</label>
              <div class=" col-sm-10">
                <textarea
                  class="form-control"
                  rows="4"
                  value={this.state.subtaskdescription}
                  onChange={this.onChangeSubtaskDescription}
                ></textarea>
              </div>
            </div>
            {/* Progress */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">Progress</label>
              <div class="col-md-10 col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.subtaskprogress}
                  onChange={this.onChangeSubtaskProgress}
                />
              </div>
            </div>
            {/* Due Date */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Due date</label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Analyst*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">Analysts</label>
              <div class="col-md-10 col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.subtaskanalyst}
                  onChange={this.onChangeSubtaskAnalyst}
                ></select>
              </div>
            </div>
            {/* Collaborator*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Collaborator
              </label>
              <div class="col-md-10 col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.subtaskcollaborator}
                  onChange={this.onChangeSubtaskCollaborator}
                ></select>
              </div>
            </div>
            {/* Tasks */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Tasks</label>
              <div class="col-md-10 col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.subtaskparenttask}
                  onChange={this.onChangeSubtaskParenttask}
                ></select>
              </div>
            </div>
            {/* Related Subtasks */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Subtasks</label>
              <div class="col-md-10 col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.subtaskrelatedsubtasks}
                  onChange={this.onChangeSubtaskRelatedsubtasks}
                ></select>
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
