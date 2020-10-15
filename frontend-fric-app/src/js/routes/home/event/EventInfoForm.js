import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupExample = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Fill out an Event Information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);
// event detailed view

class DetailedView extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeVersion = this.onChangeVersion.bind(this);
    this.onChangeAssessDate = this.onChangeAssesDate.bind(this); //assessment date
    this.onChangeOrganizationName = this.onChangeOrganizationName.bind(this);
    this.onChangeSCTG = this.onChangeSCTG.bind(this); //security classification title guide
    this.onChangeClassification = this.onChangeClassification.bind(this);
    this.onChangeDeclassDate = this.onChangeDeclassDate.bind(this); // declassification date
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);

    this.state = {
      name: "",
      description: "",
      type: "",
      version: "",
      assessdate: "",
      organizationname: "",
      sctg: "",
      classification: "",
      declassificationdate: "",
      customername: "",
      valuesClassification: [],
      valuesType: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/eventclassificationtable/get")
      .then((response) => {
        console.log(response.data[response.data.length - 1]);
        this.setState({
          valuesClassification: response.data[response.data.length - 1].values,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/eventtypetable/get")
      .then((response) => {
        console.log(response.data[response.data.length - 1]);
        this.setState({
          valuesType: response.data[response.data.length - 1].values,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  onChangeVersion(e) {
    this.setState({
      version: e.target.value,
    });
  }

  onChangeAssesDate(e) {
    this.setState({
      assessdate: e.target.value,
    });
  }

  onChangeOrganizationName(e) {
    this.setState({
      organizationname: e.target.value,
    });
  }

  onChangeSCTG(e) {
    this.setState({
      sctg: e.target.value,
    });
  }

  onChangeClassification(e) {
    this.setState({
      classification: e.target.value,
    });
  }

  onChangeDeclassDate(e) {
    this.setState({
      declassificationdate: e.target.value,
    });
  }

  onChangeCustomerName(e) {
    this.setState({
      customername: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Event Submitted");
    console.log("Name: ${this.state.name}");
    console.log("Description: ${this.state.description}");
    console.log("Type: ${this.state.type}");
    console.log("Version: ${this.state.version}");
    console.log("Assessment Date: ${this.state.assessdate}");
    console.log("Organization Name: ${this.state.organizationname}");
    console.log("SCTG: ${this.state.sctg}");
    console.log("Event Classification: ${this.state.classification}");
    console.log("Declassification Date: ${this.state.declassificationdate}");
    console.log("Customer Name: ${this.state.customername}");

    const newEvent = {
      name: this.state.name,
      description: this.state.name,
      type: this.state.type,
      version: this.state.version,
      assessdate: this.state.assessdate,
      organizationname: this.state.organizationname,
      sctg: this.state.sctg,
      classification: this.state.classification,
      declassificationdate: this.state.declassificationdate,
      customername: this.state.customername,
    };

    axios
      .post("http://localhost:4000/home/event/add", newEvent) //double check this
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      description: "",
      type: "",
      version: "",
      assessdate: "",
      organizationname: "",
      sctg: "",
      classification: "",
      declassificationdate: "",
      customername: "",
    });
  }

  // what you see
  render() {
    return (
      // x_panel is container
      <div class="x_panel">
        <div class="x_title">
          <h2>
            Event Information <PopupExample />
          </h2>

          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form>
            {/* Event name */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">Event Name</label>
              <div class=" col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
            </div>
            {/* Event Description */}
            <div class="form-group row">
              <label class="control-label col-sm-2">Event Description</label>
              <div class=" col-sm-10">
                <textarea
                  class="form-control"
                  rows="4"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                ></textarea>
              </div>
            </div>
            {/* event type */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Event Type</label>
              <div class="col-md-10 col-sm-10 ">
                {
                  <select
                    class="form-control"
                    value={this.state.type}
                    onChange={this.onChangeType}
                  >
                    {this.state.valuesType.map((value) => <option>{value}</option>)}
                  </select>
                }
              </div>
            </div>
            {/* Event Version */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Event Version
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.version}
                  onChange={this.onChangeVersion}
                />
              </div>
            </div>
            {/* Assesment Date */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Assesment Date
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.assessdate}
                  onChange={this.onChangeAssesDate}
                />
              </div>
            </div>
            {/* Organization Name */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Organization Name
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.organizationname}
                  onChange={this.onChangeOrganizationName}
                />
              </div>
            </div>
            {/*  Security Classification Title Guide*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Security Classification Title Guide
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.sctg}
                  onChange={this.onChangeSCTG}
                />
              </div>
            </div>
            {/* Event Classificatrion */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">
                Event Classification
              </label>
              <div class="col-md-10 col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.classification}
                  onChange={this.onChangeClassification}
                >
                  {this.state.valuesClassification.map((value) => <option>{value}</option>)}
                </select>
              </div>
            </div>
            {/* Declassification Date */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Declassification Date
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.declassificationdate}
                  onChange={this.onChangeDeclassDate}
                />
              </div>
            </div>
            {/* Customer Name */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Customer Name
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input
                  type="text"
                  class="form-control"
                  value={this.state.customername}
                  onChange={this.onChangeCustomerName}
                />
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
