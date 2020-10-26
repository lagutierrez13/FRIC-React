import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupExample = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Add Configuration options
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

// System Categorization Dropdowns

class Categorization extends Component {
  constructor(props) {
    super(props);

    this.onChangeConfidentiality = this.onChangeConfidentiality.bind(this);
    this.onChangeIntegrity = this.onChangeIntegrity.bind(this);
    this.onChangeAvailability = this.onChangeAvailability.bind(this);

    this.state = {
      confidentiality: "",
      integrity: "",
      availability: "",
    };
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

  onSubmit(e) {
    e.preventDefault();

    console.log("System Categorization Submitted");
    console.log("Confidentiality: ${this.state.confidentiality}");
    console.log("Integrity: ${this.state.integrity}");
    console.log("Availability: ${this.state.availability}");

    const newSystemCategorization = {
      confidentiality: this.state.confidentiality,
      integrity: this.state.integrity,
      availability: this.state.availability,
    };

    axios
      .post("http://localhost:4000/home/system/add", newSystemCategorization) //double check this
      .then((res) => console.log(res.data));

    this.setState({
      confidentiality: "",
      integrity: "",
      availability: "",
    });
  }

  render() {
    return (
      <div class="x-panel">
        <div class="x_title">
          <h2>
            System Configuration <PopupExample />
          </h2>

          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form class="form-horizontal form-label-left">
            {/* Confidentiality */}
            <div class="form-group row">
              <label class="control-label col-sm-2 ">Confidentiality</label>
              <div class="col-sm-10 ">
                <select
                  class="form-control"
                  value={this.state.confidentiality}
                  onChange={this.onChangeConfidentiality}
                >
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
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
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
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
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
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

export default Categorization;
