import React, { Component } from "react";
import axios from "axios";
// System Detailed View

class DetailedView extends Component {
  constructor(props) {
    super(props);

    this.onChangeSystemName = this.onChangeSystemName.bind(this);
    this.onChangeSystemDescription = this.onChangeSystemDescription.bind(this);
    this.onChangeAssessLocation = this.onChangeAssessLocation.bind(this);
    this.onChangeRoomNumber = this.onChangeRoomNumber.bind(this);
    this.onChangeEventRouter = this.onChangeEventRouter.bind(this);
    this.onChangeEventSwitch = this.onChangeEventSwitch.bind(this);
    this.onChangeTestPlan = this.onChangeTestPlan.bind(this);

    this.state = {
      systemname: "",
      systemdescription: "",
      assesslocation: "",
      roomnumber: "",
      eventrouter: "",
      eventswitch: "",
      testplan: "",
    };
  }

  onChangeSystemName(e) {
    this.setState({
      systemname: e.target.value,
    });
  }

  onChangeSystemDescription(e) {
    this.setState({
      systemdescription: e.target.value,
    });
  }

  onChangeAssessLocation(e) {
    this.setState({
      assesslocation: e.target.value,
    });
  }

  onChangeRoomNumber(e) {
    this.setState({
      roomnumber: e.target.value,
    });
  }

  onChangeEventRouter(e) {
    this.setState({
      eventrouter: e.target.value,
    });
  }

  onChangeEventSwitch(e) {
    this.setState({
      eventswitch: e.target.value,
    });
  }

  onChangeTestPlan(e) {
    this.setState({
      testplan: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("System Submitted");
    console.log("Name: ${this.state.systemname}");
    console.log("Description: ${this.state.systemdescription}");
    console.log("Assessment Location: ${this.state.assesslocation}");
    console.log("Room Number: ${this.state.roomnumber}");
    console.log("Event Router: ${this.state.eventrouter");
    console.log("Event Switch ${this.state.eventswitch}");
    console.log("testplan: ${this.state.testplan}");

    const newSystem = {
      systemname: this.state.systemname,
      systemdescription: this.state.systemdescription,
      assesslocation: this.state.assesslocation,
      roomnumber: this.state.roomnumber,
      eventrouter: this.state.eventrouter,
      eventswitch: this.state.eventswitch,
      testplan: this.state.testplan,
    };

    axios
      .post("http://localhost:4000/home/system/add", newSystem) //double check this
      .then((res) => console.log(res.data));

    this.setState({
      systemname: "",
      systemdescription: "",
      assesslocation: "",
      roomnumber: "",
      eventrouter: "",
      eventswitch: "",
      testplan: "",
    });
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x-title">
          <h2>System Information</h2>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form>
            {/* System Name */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">System Name</label>
              <div class=" col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.systemname}
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
                  value={this.state.systemdescription}
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
                  value={this.state.assesslocation}
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
                  value={this.state.roomnumber}
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
                  value={this.state.eventrouter}
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
                  value={this.state.eventswitch}
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
                  value={this.state.testplan}
                  onChange={this.onChangeTestPlan}
                ></textarea>
              </div>
            </div>
            {/* Buttons */}
            <br />
            <div class="item form-group">
              <button class="btn btn-primary" type="submit" value="Save Event">
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
