import React from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

class EditTaskModal extends React.Component {
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
      showHide: false,
      task: props.task,
      _id: props.task._id,
      newTitle: props.task.title,
      newDescription: props.task.description,
      newDuedate: props.task.duedate,
      newSystem: props.task.system,
      newPriority: props.task.priority,
      newAnalyst: props.task.analyst,
      newCollaboratos: props.task.collaborator,
      newRelatedtask: props.task.relatedtask,
    };
  }
  onChangeTaskTitle(e) {
    this.setState({
      newTitle: e.target.value,
    });
  }

  onChangeTaskDescription(e) {
    this.setState({
      newDescription: e.target.value,
    });
  }

  onChangeTaskDueDate(e) {
    this.setState({
      newDuedate: e.target.value,
    });
  }

  onChangeTaskSystem(e) {
    this.setState({
      newSystem: e.target.value,
    });
  }

  onChangeTaskPriority(e) {
    this.setState({
      newPriority: e.target.value,
    });
  }

  onChangeTaskAnalyst(e) {
    this.setState({
      newAnalyst: e.target.value,
    });
  }

  onChangeTaskCollaborator(e) {
    this.setState({
      newCollaboratos: e.target.value,
    });
  }

  onChangeRelatedTasks(e) {
    this.setState({
      newRelatedtask: e.target.value,
    });
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  onSubmit(e) {
    e.preventDefault();

    const updatedTask = {
      title: this.state.newTitle,
      description: this.state.newDescription,
      duedate: this.state.newDueDate,
      system: this.state.newSystem,
      priority: this.state.newPriority,
      analyst: this.state.newAnalyst,
      collaborator: this.state.newCollaborator,
      relatedsubtask: this.state.newRelatedSubtask,
    };

    console.log(`Title: ${updatedTask.title}`);
    console.log(`Description: ${updatedTask.description}`);
    console.log(`Due date: ${updatedTask.duedate}`);
    console.log(`Analyst: ${updatedTask.analyst}`);
    console.log(`Collaborator: ${updatedTask.collaborator}`);
    console.log(`Parent: ${updatedTask.parent}`);
    console.log(`Related: ${updatedTask.relatedsubtask}`);
    console.log(`Findings: ${updatedTask.no_of_findings}`);

    const newHistory = {
      action: `Task: ${this.state.newTitle} was edited`,
      analyst: "",
    };

    axios
      .put(
        `http://localhost:4000/home/tasks/update/${this.state._id}`,
        updatedTask
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
            <Modal.title>Edit Task</Modal.title>
          </Modal.Header>
          <Modal.Body>
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
                  <textarea
                    class="form-control"
                    rows="4"
                    value={this.state.taskdescription}
                    onChange={this.onChangeTaskDescription}
                  ></textarea>
                </div>
              </div>
              {/* Due Date */}
              <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Due date</label>
                <div class="col-md-10 col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.taskduedate}
                    onChange={this.onChangeTaskDueDate}
                  />
                </div>
              </div>
              {/* System */}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">System</label>
                <div class="col-md-10 col-sm-10 ">
                  <select
                    class="form-control"
                    value={this.state.tasksystem}
                    onChange={this.onChangeTaskSystem}
                  ></select>
                </div>
              </div>
              {/* Priority */}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">Priority</label>
                <div class="col-md-10 col-sm-10 ">
                  <select
                    class="form-control"
                    value={this.state.taskpriority}
                    onChange={this.onChangeTaskPriority}
                  ></select>
                </div>
              </div>
              {/* Analyst*/}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">Analysts</label>
                <div class="col-md-10 col-sm-10 ">
                  <select
                    class="form-control"
                    value={this.state.taskanalyst}
                    onChange={this.onChangeTaskAnalyst}
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
                    value={this.state.taskcollaborator}
                    onChange={this.onChangeTaskCollaborator}
                  ></select>
                </div>
              </div>
              {/* Related Tasks */}
              <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">
                  Related Tasks
                </label>
                <div class="col-md-10 col-sm-10 ">
                  <select
                    class="form-control"
                    value={this.state.relatedtasks}
                    onChange={this.onChangeRelatedTasks}
                  ></select>
                </div>
              </div>
              <button
                class="btn btn-danger"
                type="button"
                type="submit"
                onClick={() => this.handleModalShowHide()}
              >
                Cancel
              </button>
              <button
                class="btn btn-primary"
                type="submit"
                onClick={() => this.handleModalShowHide()}
                onClick={() => window.location.reload(false)}
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

export default EditTaskModal;
