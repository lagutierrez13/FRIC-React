import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupExample = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Add and Edit Lead Analysts and Analysts
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);
//Event team Information
class TeamInfo extends Component {
  constructor(props) {
    super(props);

    this.onChangeLeadFirstName = this.onChangeLeadFirstName.bind(this);
    this.onChangeLeadLastName = this.onChangeLeadLastName.bind(this);
    this.onChangeLeadInitials = this.onChangeLeadInitials.bind(this);
    this.onChangeLeadTitle = this.onChangeLeadTitle.bind(this);
    this.onChangeAnalystFirstName = this.onChangeAnalystFirstName.bind(this);
    this.onChangeAnalystLastName = this.onChangeAnalystLastName.bind(this);
    this.onChangeAnalystInitials = this.onChangeAnalystInitials.bind(this);
    this.onChangeAnalystTitle = this.onChangeAnalystTitle.bind(this);

    this.state = {
      leadfirstname: "",
      leadlastname: "",
      leadinitials: "",
      leadtitle: "",
      analystfirstname: "",
      analystlastname: "",
      analystinitials: "",
      analysttitle: "",
      analysts: [],
      leadAnalysts: [],
    };
  }

  componentDidMount() {
    //GET list of only analysts
    axios
      .get("http://localhost:4000/analyst/get")
      .then((response) => {
        const results = [];
        const results2 = [];
        for (let i = 0; i < response.data.length; i++) {
          if (!response.data[i].isLead) {
            results.push(response.data[i]);
          } else {
            results2.push(response.data[i]);
          }
        }
        this.setState({
          analysts: results,
          leadAnalysts: results2,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // componentDidMount() { //GET list of only Lead analysts
  //   axios
  //     .get("http://localhost:4000/analyst/get")
  //     .then((response) => {
  //       const leadAnalystsReturned
  //       this.setState({
  //         leadAnalysts: leadAnalystsReturned.filter(leadAnalyst => response.data.)
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  onChangeLeadFirstName(e) {
    this.setState({
      leadfirstname: e.target.value,
    });
  }

  onChangeLeadLastName(e) {
    this.setState({
      leadlastname: e.target.value,
    });
  }

  onChangeLeadInitials(e) {
    this.setState({
      leadinitials: e.target.value,
    });
  }

  onChangeLeadTitle(e) {
    this.setState({
      leadtitle: e.target.value,
    });
  }

  onChangeAnalystFirstName(e) {
    this.setState({
      analystfirstname: e.target.value,
    });
  }

  onChangeAnalystLastName(e) {
    this.setState({
      onChangeAnalystLastName: e.target.value,
    });
  }

  onChangeAnalystInitials(e) {
    this.setState({
      analystinitials: e.target.value,
    });
  }

  onChangeAnalystTitle(e) {
    this.setState({
      analysttitle: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Analyst Updated");
    console.log("Lead First Name: ${this.state.leadfirstname}");
    console.log("Lead Last Name: ${this.state.leadlastname}");
    console.log("Lead Initials: ${this.state.leadinitials}");
    console.log("Lead Title: ${this.state.leadtitle}");
    console.log("Analyst First Name: ${this.state.analystfirstname}");
    console.log("Analyst Last Name: ${this.state.analystlastname}");
    console.log("Analyst Initials: ${this.state.analsytinitials}");
    console.log("Analyst Title: ${this.state.analysttitle}");

    const editAnalyst = {
      leadfirstname: this.state.leadfirstname,
      leadlastname: this.state.leadlastname,
      leadinitials: this.state.leadinitials,
      leadtitle: this.state.leadtitle,
      analystfirstname: this.state.analystfirstname,
      analystlastname: this.state.analystlastname,
      analystinitials: this.state.analystinitials,
      analysttitle: this.state.analysttitle,
    };

    const newHistory = {
      action: "Team information edited",
      analyst: "",
    };

    axios
      .post("http://localhost:4000/home/event/add", editAnalyst) //double check this
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:4000/history/new", newHistory)
      .then((res) => console.log(res.data));

    this.setState({
      leadfirstname: "",
      leadlastname: "",
      leadinitials: "",
      leadtitle: "",
      analystfirstname: "",
      analystlastname: "",
      analystinitials: "",
      analysttitle: "",
    });
  }

  leadAnalystList() {
    return this.state.leadAnalysts.map(function (currentLead, i) {
      return (
        <tbody>
          <th></th>
          <th>{currentLead.leadinitials}</th>
        </tbody>
      );
    });
  }

  analystList() {
    return this.state.analysts.map(function (currentAnalyst, i) {
      return (
        <tbody>
          <th></th>
          <th>{currentAnalyst.analystinitials}</th>
        </tbody>
      );
    });
  }

  onSubmitLead(e) {
    e.preventDefault();

    const newLeadAnalyst = {
      initials: this.state.leadinitials,
      first: this.state.leadfirstname,
      last: this.state.leadlastname,
      ip: "",
      isLead: true,
      title: this.state.leadtitle,
    };

    const newAnalyst = {
      initials: this.state.analystinitials,
      first: this.state.analystfirstname,
      last: this.state.analystlastname,
      ip: "",
      isLead: false,
      title: this.state.analysttitle,
    };

    const newHistory = {
      action: "Lead analyst added",
      analyst: this.state.leadinitials,
    };

    axios
      .post("http://localhost:4000/analyst/new", newLeadAnalyst)
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:4000/analyst/new", newAnalyst)
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:4000/history/new", newHistory)
      .then((res) => console.log(res.data));

    this.setState({
      value_to_add: "",
    });
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>
            Team Information <PopupExample />
          </h2>

          <div class="clearfix"></div>
        </div>
        {/* Lead */}
        <div class="col-md-6 col-sm-6 ">
          <div class="x_panel tile">
            <div class="x-title">
              <h2>Lead Analyst</h2>
              <div class="clearfix"></div>
            </div>
            {/* lead table */}
            <div class="x_content">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="check-all"></input>
                    </th>
                    <th>Options</th>
                    <th>Initials</th>
                  </tr>
                </thead>
                {this.leadAnalystList()}
              </table>
            </div>
          </div>
          {/* settings container */}
          <div class="x_panel tile">
            <div class="x_title">
              <h2>Lead Analyst Settings | Add/Edit</h2>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">
              <form class="form-horizontal form-label-left">
                <div class="form-group row ">
                  <label class="control-label col-md-3 col-sm-3 ">
                    First Name
                  </label>
                  <div class="col-md-9 col-sm-9 ">
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.leadfirstname}
                      onChange={this.onChangeLeadFirstName}
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
                      value={this.state.leadlastname}
                      onChange={this.onChangeLeadLastName}
                    />
                  </div>
                </div>
                <div class="form-group row ">
                  <label class="control-label col-md-3 col-sm-3 ">
                    Initials
                  </label>
                  <div class="col-md-9 col-sm-9 ">
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.leadinitials}
                      onChange={this.onChangeLeadInitials}
                    />
                  </div>
                </div>
                <div class="form-group row ">
                  <label class="control-label col-md-3 col-sm-3 ">Title</label>
                  <div class="col-md-9 col-sm-9 ">
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.leadtitle}
                      onChange={this.onChangeLeadTitle}
                    />
                  </div>
                </div>
                <div class="item form-group">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    value="Save Event"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Analyst */}
        <div class="col-md-6 col-sm-6 ">
          <div class="x_panel tile">
            <div class="x-title">
              <h2>Analyst</h2>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="check-all"></input>
                    </th>
                    <th>Options</th>
                    <th>Initials</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
          {/* settings container */}
          <div class="x_panel tile">
            <div class="x_title">
              <h2>Analyst Settings | Add/Edit</h2>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">
              <form
                onSubmit={this.onSubmitLead}
                class="form-horizontal form-label-left"
              >
                <div class="form-group row ">
                  <label class="control-label col-md-3 col-sm-3 ">
                    First Name
                  </label>
                  <div class="col-md-9 col-sm-9 ">
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.analystfirstname}
                      onChange={this.onChangeAnalystFirstName}
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
                      value={this.state.analystlastname}
                      onChange={this.onChangeAnalystLastName}
                    />
                  </div>
                </div>
                <div class="form-group row ">
                  <label class="control-label col-md-3 col-sm-3 ">
                    Initials
                  </label>
                  <div class="col-md-9 col-sm-9 ">
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.analystinitials}
                      onChange={this.onChangeAnalystInitials}
                    />
                  </div>
                </div>
                <div class="form-group row ">
                  <label class="control-label col-md-3 col-sm-3 ">Title</label>
                  <div class="col-md-9 col-sm-9 ">
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.analysttitle}
                      onChange={this.onChangeAnalystTitle}
                    />
                  </div>
                </div>
                <div class="item form-group">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    value="Save Event"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamInfo;
