import React from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

class EditAnalystModal extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeInitials = this.onChangeInitials.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeIP = this.onChangeIP.bind(this);
    this.onChangeProgress = this.onChangeProgress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      showHide: false,
      analyst: props.analyst,
      isLead: props.analyst.isLead,
      progress: props.analyst.progress,
      _id: props.analyst._id,
      newInitials: props.analyst.initials,
      newFirst: props.analyst.first,
      newLast: props.analyst.last,
      newTitle: props.analyst.title,
      newIP: props.analyst.ip,
      newProgress: props.analyst.progress,
    };
  }

  onChangeInitials(e) {
    this.setState({
      newInitials: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      newFirst: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      newLast: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      newTitle: e.target.value,
    });
  }

  onChangeIP(e) {
    this.setState({
      newIP: e.target.value,
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

    const updatedAnalyst = {
      initials: this.state.newInitials,
      first: this.state.newFirst,
      last: this.state.newLast,
      title: this.state.newTitle,
      ip: this.state.newIP,
      isLead: this.state.isLead,
      progress: this.state.newProgress,
    };

    console.log(`Initials: ${updatedAnalyst.initials}`);
    console.log(`First: ${updatedAnalyst.first}`);
    console.log(`Last: ${updatedAnalyst.last}`);
    console.log(`Title: ${updatedAnalyst.title}`);
    console.log(`IP: ${updatedAnalyst.ip}`);
    console.log(`Progress: ${updatedAnalyst.progress}`);

    const newHistory = {
      action: `Analyst: ${this.state.newInitials} was edited`,
      analyst: "",
    };

    axios
      .put(
        `http://localhost:4000/analyst/update/${this.state._id}`,
        updatedAnalyst
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
            <Modal.Title>Edit Analyst</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={this.onSubmit}
              class="form-horizontal form-label-left"
            >
              <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">Initials</label>
                <div class="col-md-9 col-sm-9 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.analyst.initials}
                    onChange={this.onChangeInitials}
                  />
                </div>
              </div>
              <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">
                  First Name
                </label>
                <div class="col-md-9 col-sm-9 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.analyst.first}
                    onChange={this.onChangeFirstName}
                  />
                </div>
              </div>
              <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">
                  Last Name
                </label>
                <div class="col-md-9 col-sm-9 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.analyst.last}
                    onChange={this.onChangeLastName}
                  />
                </div>
              </div>
              <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">Title</label>
                <div class="col-md-9 col-sm-9 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.analyst.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
              </div>
              <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">IP</label>
                <div class="col-md-9 col-sm-9 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.analyst.ip}
                    onChange={this.onChangeIP}
                  />
                </div>
              </div>
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">Progress</label>
                <div class="col-md-10 col-sm-10 ">
                  <input
                    id="progress"
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    class="form-control"
                    defaultValue={this.state.analyst.progress}
                    onChange={this.onChangeProgress}
                  />
                  <label for="progress">{this.state.newProgress}</label>
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

export default EditAnalystModal;
