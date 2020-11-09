import React, { Component } from "react";
import {Row, Col, Clearfix, Button} from "react-bootstrap";
import axios from "axios";
import Link from "react-router-dom/Link";
import {XPanel} from "../../../components";


export class createEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeInitials = this.onChangeInitials.bind(this);
    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeIP = this.onChangeIP.bind(this);

    this.state = {
      initials: "",
      eventName: "",
      ip: "",
    };
  }

  onChangeInitials(e) {
    this.setState({
      initials: e.target.value,
    });
  }

  onChangeEventName(e) {
    this.setState({
      eventName: e.target.value,
    });
  }

  onChangeIP(e) {
    this.setState({
      ip: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("New Event Submitted");
    console.log(`Initials: ${this.state.initials}`);
    console.log(`EventName: ${this.state.eventName}`);
    console.log(`IP: ${this.state.ip}`);

    const newEvent = {
      eventName: this.state.eventName,
      description: "",
      no_of_findings: "",
      no_of_systems: "",
      type: "",
      version: "",
      assessdate: "",
      sctg: "",
      classification: "",
      declassificationdate: "",
      customername: "",
      organizationname: "",
    };

    const newAnalyst = {
      initials: this.state.initials,
      first: "",
      last: "",
      ip: this.state.ip,
      isLead: true,
    };

    const newHistory = {
      action: "Event created",
      analyst: this.state.initials,
    };

    axios
      .post("http://localhost:4000/home/event/add", newEvent)
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:4000/analyst/new", newAnalyst)
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
    });
  }

  render() {
    const { panelVisible } = this.state;
    const onHide = (e) => this.setState({ panelVisible: !panelVisible });

    return (
      <body className="event">
        <div>
          <div className="login_wrapper" ref={this.props.containerRef}>
            <div className="animate form login_form">
              <section className="login_content" ref={this.props.containerRef}>
                <form onSubmit={this.onSubmit}>
                  <h1>Create Account</h1>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lead Analyst Initials"
                      required=""
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Event Name"
                      required=""
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="IP Address"
                      required=""
                    />
                  </div>
                  <div></div>
                  <div>
                    <Link to="/home/event">
                      <Button className="btn btn-default" type="submit">
                        <span>Create Event</span>
                      </Button>
                    </Link>
                  </div>

                  <div className="clearfix"></div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </body>

    );
  }
}
export default createEvent;
