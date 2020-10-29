import React from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

class EditSystemModal extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeSystemName = this.onChangeSystemName.bind(this);
    this.onChangeSystemDescription = this.onChangeSystemDescription.bind(this);
    this.onChangeAssessLocation = this.onChangeAssessLocation.bind(this);
    this.onChangeRoomNumber = this.onChangeRoomNumber.bind(this);
    this.onChangeEventRouter = this.onChangeEventRouter.bind(this);
    this.onChangeEventSwitch = this.onChangeEventSwitch.bind(this);
    this.onChangeTestPlan = this.onChangeTestPlan.bind(this);
    this.onChangeProgress = this.onChangeProgress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      showHide: false,
      system: props.system,
      _id: props.system._id,
      progress: props.system.progress,
      newSystemName: props.system.systemname,
      newSystemDescription: props.system.systemdescription,
      newAssessLocation: props.system.assesslocation,
      newRoomNumber: props.system.roomnumber,
      newEventRouter: props.system.eventrouter,
      newEventSwitch: props.system.eventswitch,
      newTestPlan: props.system.testplan,
      newProgress: props.system.progress,
    };
  }

  onChangeSystemName(e) {
    this.setState({
      newSystemName: e.target.value,
    });
  }

  onChangeSystemDescription(e) {
    this.setState({
      newSystemDescription: e.target.value,
    });
  }

  onChangeAssessLocation(e) {
    this.setState({
      newAssessLocation: e.target.value,
    });
  }

  onChangeRoomNumber(e) {
    this.setState({
      newRoomNumber: e.target.value,
    });
  }

  onChangeEventRouter(e) {
    this.setState({
      newEventRouter: e.target.value,
    });
  }

  onChangeEventSwitch(e) {
    this.setState({
      newEventSwitch: e.target.value,
    });
  }

  onChangeTestPlan(e) {
    this.setState({
      newTestPlan: e.target.value,
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

    const updatedSystem = {
      systemname: this.state.newSystemName,
      systemdescription: this.state.newSystemDescription,
      assesslocation: this.state.newAssessLocation,
      roomnumber: this.state.newRoomNumber,
      eventrouter: this.state.newEventRouter,
      eventswitch: this.state.newEventSwitch,
      testplan: this.state.newTestPlan,
      progress: this.state.newProgress,
    };

    console.log(`Name: ${updatedSystem.systemname}`);
    console.log(`Description: ${updatedSystem.systemdescription}`);
    console.log(`Assess Location: ${updatedSystem.assesslocation}`);
    console.log(`Room Number: ${updatedSystem.roomnumber}`);
    console.log(`Event Router: ${updatedSystem.eventrouter}`);
    console.log(`Event Switch: ${updatedSystem.eventswitch}`);
    console.log(`Test Plan: ${updatedSystem.testplan}`);
    console.log(`Test Plan: ${updatedSystem.progress}`);

    const newHistory = {
      action: `System: ${this.state.newSystemName} was edited`,
      analyst: "",
    };

    console.log("About to update system");

    axios
      .put(
        `http://localhost:4000/home/systems/update/${this.state._id}`,
        updatedSystem
      )
      .then((res) => console.log(res.data));

    console.log("Updated system");

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
            <Modal.Title>Edit System</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              {/* System Name */}
              <div class="form-group row">
                <label class="control-label  col-sm-2 ">System Name</label>
                <div class=" col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.system.systemname}
                    onChange={this.onChangeSystemName}
                  />
                </div>
              </div>
              {/* System Description */}
              <div class="form-group row">
                <label class="control-label col-sm-2">System Description</label>
                <div class=" col-sm-10">
                  <textarea
                    class="form-control"
                    rows="4"
                    defaultValue={this.state.system.systemdescription}
                    onChange={this.onChangeSystemDescription}
                  ></textarea>
                </div>
              </div>
              {/* System Assessment Location */}
              <div class="form-group row">
                <label class="control-label  col-sm-2 ">
                  System's Assessment Location
                </label>
                <div class=" col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.system.assesslocation}
                    onChange={this.onChangeAssessLocation}
                  />
                </div>
              </div>
              {/* Location Room Number */}
              <div class="form-group row">
                <label class="control-label  col-sm-2 ">
                  Location Room Number
                </label>
                <div class=" col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.system.roomnumber}
                    onChange={this.onChangeRoomNumber}
                  />
                </div>
              </div>
              {/* Event Router */}
              <div class="form-group row">
                <label class="control-label  col-sm-2 ">Event Router</label>
                <div class=" col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.system.eventrouter}
                    onChange={this.onChangeEventRouter}
                  />
                </div>
              </div>
              {/* Event Switch (what switch????) */}
              <div class="form-group row">
                <label class="control-label  col-sm-2 ">Event Switch</label>
                <div class=" col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.system.eventswitch}
                    onChange={this.onChangeEventSwitch}
                  />
                </div>
              </div>
              {/* Test Plan */}
              <div class="form-group row">
                <label class="control-label col-sm-2">Test Plan</label>
                <div class=" col-sm-10">
                  <textarea
                    class="form-control"
                    rows="4"
                    defaultValue={this.state.system.testplan}
                    onChange={this.onChangeTestPlan}
                  ></textarea>
                </div>
              </div>
              {/* Progress */}
              <div class="form-group row">
                <label class="control-label col-sm-2">Progress</label>
                <div class=" col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    defaultValue={this.state.system.progress}
                    onChange={this.onChangeProgress}
                  ></input>
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

export default EditSystemModal;
