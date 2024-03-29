import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupExample = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Fill out System Information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);
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
    this.onChangeConfidentiality = this.onChangeConfidentiality.bind(this);
    this.onChangeIntegrity = this.onChangeIntegrity.bind(this);
    this.onChangeAvailability = this.onChangeAvailability.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      systemname: "",
      systemdescription: "",
      assesslocation: "",
      roomnumber: "",
      eventrouter: "",
      eventswitch: "",
      testplan: "",
      no_of_findings: 0,
      no_of_tasks: 0,
      confidentiality: "",
      integrity: "",
      availability: "",
      progress: 0,
      valuesConfidentiality: [],
      valuesIntegrity: [],
      valuesAvailability: [],
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

  onChangeConfidentiality(e) {
    this.setState({
      confidentiality: e.target.value,
    });
  }

  onChangeIntegrity(e) {
    this.setState({
      integrity: e.target.value,
    });
  }

  onChangeAvailability(e) {
    this.setState({
      availability: e.target.value,
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/configuration/get/confidentiality")
      .then((response) => {
        console.log(response.data);
        this.setState({
          valuesConfidentiality: response.data.values,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/configuration/get/integrity")
      .then((response) => {
        console.log(response.data);
        this.setState({
          valuesIntegrity: response.data.values,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/configuration/get/availability")
      .then((response) => {
        console.log(response.data);
        this.setState({
          valuesAvailability: response.data.values,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("System Submitted");
    console.log(`Title: ${this.state.systemname}`);
    console.log(`Description: ${this.state.systemdescription}`);
    console.log(`Assessment Location: ${this.state.assesslocation}`);
    console.log(`Room number: ${this.state.roomnumber}`);
    console.log(`Event Router: ${this.state.eventrouter}`);
    console.log(`Event Switch: ${this.state.eventswitch}`);
    console.log(`Test plan: ${this.state.testplan}`);

    const newSystem = {
      systemname: this.state.systemname,
      systemdescription: this.state.systemdescription,
      assesslocation: this.state.assesslocation,
      roomnumber: this.state.roomnumber,
      eventrouter: this.state.eventrouter,
      eventswitch: this.state.eventswitch,
      testplan: this.state.testplan,
      no_of_findings: this.state.no_of_findings,
      no_of_tasks: this.state.no_of_tasks,
      confidentiality: this.state.confidentiality,
      integrity: this.state.integrity,
      availability: this.state.availability,
      progress: this.state.progress,
    };

    const newHistory = {
      action: "System edited",
      analyst: "",
    };

    axios
      .post("http://localhost:4000/home/systems/new", newSystem) //double check this
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:4000/history/new", newHistory)
      .then((res) => console.log(res.data));

    this.setState({
      systemname: "",
      systemdescription: "",
      assesslocation: "",
      roomnumber: "",
      eventrouter: "",
      eventswitch: "",
      testplan: "",
      no_of_findings: 0,
      no_of_tasks: 0,
      confidentiality: "",
      integrity: "",
      availability: "",
      progress: 0,
    });
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x-title">
          <h2>
            System Information <PopupExample />
          </h2>

          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form onSubmit={this.onSubmit}>
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
            <div class="x_title">
              <h2>
                System Categorization <PopupExample />
              </h2>

              <div class="clearfix"></div>
            </div>
            {/* Confidentiality */}
            <div class="form-group row">
              <label class="control-label col-sm-2 ">Confidentiality</label>
              <div class="col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.confidentiality}
                  onChange={this.onChangeConfidentiality}
                >
                  {this.state.valuesConfidentiality.map((value) => (
                    <option>{value}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Integrity */}
            <div class="form-group row">
              <label class="control-label col-sm-2 ">Integrity</label>
              <div class="col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.integrity}
                  onChange={this.onChangeIntegrity}
                >
                  {this.state.valuesIntegrity.map((value) => (
                    <option>{value}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Availability */}
            <div class="form-group row">
              <label class="control-label col-sm-2 ">Availability</label>
              <div class="col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.availability}
                  onChange={this.onChangeAvailability}
                >
                  {this.state.valuesAvailability.map((value) => (
                    <option>{value}</option>
                  ))}
                </select>
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
