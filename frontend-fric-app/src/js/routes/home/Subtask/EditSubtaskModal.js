import React from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

class EditSubtaskModal extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDueDate = this.onChangeDueDate.bind(this);
    this.onChangeAnalyst = this.onChangeAnalyst.bind(this);
    this.onChangeCollaborator = this.onChangeCollaborator.bind(this);
    this.onChangeParent = this.onChangeParent.bind(this);
    this.onChangeRelatedSubtask = this.onChangeRelatedSubtask.bind(this);
    this.onChangeProgress = this.onChangeProgress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      showHide: false,
      subtask: props.subtask,
      _id: props.subtask._id,
      progress: props.subtask.progress,
      no_of_findings: props.subtask.no_of_findings,
      newTitle: props.subtask.title,
      newDescription: props.subtask.description,
      newDueDate: props.subtask.duedate,
      newAnalyst: props.subtask.analyst,
      newCollaborator: props.subtask.collaborator,
      newParent: props.subtask.parent,
      newRelatedSubtask: props.subtask.relatedsubtask,
      newProgress: props.subtask.progress,
      analysts: ["1", "2", "3"],
      collaborators: ["1", "2", "3"],
      tasks: ["1", "2", "3"],
      subtasks: ["1", "2", "3"],
    };
  }

  onChangeTitle(e) {
    this.setState({
      newTitle: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      newDescription: e.target.value,
    });
  }

  onChangeDueDate(e) {
    this.setState({
      newDueDate: e.target.value,
    });
  }

  onChangeAnalyst(e) {
    this.setState({
      newAnalyst: e.target.value,
    });
  }

  onChangeCollaborator(e) {
    this.setState({
      newCollaborator: e.target.value,
    });
  }

  onChangeParent(e) {
    this.setState({
      newParent: e.target.value,
    });
  }

  onChangeRelatedSubtask(e) {
    this.setState({
      newRelatedSubtask: e.target.value,
    });
  }
  onChangeProgress(e) {
    this.setState({
      newProgress: e.target.value,
    });
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  onSubmit(e) {
    e.preventDefault();

    const updatedSubtask = {
      title: this.state.newTitle,
      description: this.state.newDescription,
      duedate: this.state.newDueDate,
      analyst: this.state.newAnalyst,
      collaborator: this.state.newCollaborator,
      parent: this.state.newParent,
      relatedsubtask: this.state.newRelatedSubtask,
      no_of_findings: this.state.no_of_findings,
      progress: this.state.newProgress,
    };

    console.log(`Title: ${updatedSubtask.title}`);
    console.log(`Description: ${updatedSubtask.description}`);
    console.log(`Due date: ${updatedSubtask.duedate}`);
    console.log(`Analyst: ${updatedSubtask.analyst}`);
    console.log(`Collaborator: ${updatedSubtask.collaborator}`);
    console.log(`Parent: ${updatedSubtask.parent}`);
    console.log(`Related: ${updatedSubtask.relatedsubtask}`);
    console.log(`Findings: ${updatedSubtask.no_of_findings}`);
    console.log(`Progress: ${updatedSubtask.progress}`);

    const newHistory = {
      action: `Subtask: ${this.state.newTitle} was edited`,
      analyst: "",
    };

    axios
      .put(
        `http://localhost:4000/home/subtasks/update/${this.state._id}`,
        updatedSubtask
      )
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:4000/history/new", newHistory)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Edit
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Edit Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              {/* Task Title */}
              <div class="form-group row">
                <label class="control-label  col-sm-2 ">Subtask Title</label>
                <div class=" col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.subtask.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
              </div>
              {/* Task Description */}
              <div class="form-group row">
                <label class="control-label col-sm-2">
                  Subtask Description
                </label>
                <div class=" col-sm-10">
                  <textarea
                    class="form-control"
                    rows="4"
                    defaultValue={this.state.subtask.description}
                    onChange={this.onChangeDescription}
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
                    defaultValue={this.state.subtask.progress}
                    onChange={this.onChangeProgress}
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
                    defaultValue={this.state.subtask.analyst}
                    onChange={this.onChangeAnalyst}
                  >
                    {this.state.analysts.map((value) => (
                      <option>{value}</option>
                    ))}
                  </select>
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
                    defaultValue={this.state.subtask.collaborator}
                    onChange={this.onChangeCollaborator}
                  >
                    {this.state.collaborators.map((value) => (
                      <option>{value}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Tasks */}
              <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Tasks</label>
                <div class="col-md-10 col-sm-10 ">
                  <select
                    class="form-control"
                    defaultValue={this.state.parent}
                    onChange={this.onChangeParent}
                  >
                    {this.state.tasks.map((value) => (
                      <option>{value}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Related Subtasks */}
              <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Subtasks</label>
                <div class="col-md-10 col-sm-10 ">
                  <select
                    class="form-control"
                    defaultValue={this.state.subtask.relatedsubtask}
                    onChange={this.onChangeRelatedSubtask}
                  >
                    {this.state.subtasks.map((value) => (
                      <option>{value}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                class="btn btn-danger"
                type="button"
                onClick={() => this.handleModalShowHide()}
              >
                Cancel
              </button>
              <button
                class="btn btn-primary"
                type="submit"
                onClick={() => this.handleModalShowHide()}
              >
                Save Changes
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditSubtaskModal;
