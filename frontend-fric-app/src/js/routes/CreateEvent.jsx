import React from "react";
import {Row, Col, Clearfix, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {XPanel} from "../components";

//import loginImg from "../../login.svg";

export class createEvent extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeInitials = this.onChangeInitials.bind(this);
    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeIP = this.onChnageIP.bind(this);

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
      <div className="x_panel">
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Login"></XPanel.Title>
              <XPanel.Content>
                <form>
                  <Row>
                    <Col md={6} sm={6} xs={12}>
                      <div className="form-group row">
                        <label className="control-label  col-sm-2 ">Initials</label>
                        <div className=" col-sm-10 ">
                          <input
                            type="text"
                            className="form-control"

                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="item form-group">
                    <Link to="/home/Analyst">
                      <Button renderAs="button">
                        <span>Login</span>
                      </Button>
                    </Link>
                    <Link to="/createEvent">
                      <Button /*renderAs="button"*/ className="btn btn-default" type="submit">
                        <span>Create Event</span>
                      </Button>
                    </Link>
                  </div>
                </form>
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
      // {/*<body className="login">*/}
      // {/*  <div>*/}
      // {/*    <a className="hiddenanchor" id="signup"></a>*/}
      // {/*    <a className="hiddenanchor" id="signin"></a>*/}
      //
      // {/*    <div className="login_wrapper" ref={this.props.containerRef}>*/}
      // {/*      <div className="animate form login_form">*/}
      // {/*        <section className="login_content" ref={this.props.containerRef}>*/}
      // {/*          <form onSubmit={this.onSubmit}>*/}
      // {/*            <h1>Create Account</h1>*/}
      // {/*            <div>*/}
      // {/*              <input*/}
      // {/*                type="text"*/}
      // {/*                className="form-control"*/}
      // {/*                placeholder="Lead Analyst Initials"*/}
      // {/*                required=""*/}
      // {/*              />*/}
      // {/*            </div>*/}
      // {/*            <div>*/}
      // {/*              <input*/}
      // {/*                type="text"*/}
      // {/*                className="form-control"*/}
      // {/*                placeholder="Event Name"*/}
      // {/*                required=""*/}
      // {/*              />*/}
      // {/*            </div>*/}
      // {/*            <div>*/}
      // {/*              <input*/}
      // {/*                type="text"*/}
      // {/*                className="form-control"*/}
      // {/*                placeholder="IP Address"*/}
      // {/*                required=""*/}
      // {/*              />*/}
      // {/*            </div>*/}
      // {/*            <div></div>*/}
      // {/*            <div>*/}
      // {/*              <button className="btn btn-default" type="submit">*/}
      // {/*                Submit*/}
      // {/*              </button>*/}
      // {/*            </div>*/}
      //
      // {/*            <div className="clearfix"></div>*/}
      //
      // {/*            /!*<div className="separator">*!/*/}
      // {/*            /!*  <p className="change_link">New Event?*!/*/}
      // {/*            /!*    /!*<Link to="/createEvent"><button>*!/*!/*/}
      // {/*            /!*    /!*  Create Event*!/*!/*/}
      // {/*            /!*    /!*</button>*!/*!/*/}
      // {/*            /!*    /!*</Link>*!/*!/*/}
      // {/*            /!*    /!*<Link to="/createEvent">*!/*!/*/}
      // {/*            /!*    /!*  <button type="button">*!/*!/*/}
      // {/*            /!*    /!*    Create Event*!/*!/*/}
      // {/*            /!*    /!*  </button>*!/*!/*/}
      // {/*            /!*    /!*</Link>*!/*!/*/}
      // {/*            /!*    <a href="createEvent.jsx" className="to_register"> Create Event </a>*!/*/}
      // {/*            /!*  </p>*!/*/}
      //
      // {/*            /!*  <div className="clearfix"></div>*!/*/}
      // {/*            /!*  <br/>*!/*/}
      //
      // {/*            /!*</div>*!/*/}
      // {/*          </form>*/}
      // {/*        </section>*/}
      // {/*      </div>*/}
      //
      // {/*      /!*<div id="register" className="animate form registration_form">*!/*/}
      // {/*      /!*  <section className="login_content">*!/*/}
      // {/*      /!*    <form>*!/*/}
      // {/*      /!*      <h1>Create Account</h1>*!/*/}
      // {/*      /!*      <div>*!/*/}
      // {/*      /!*        <input type="text" className="form-control" placeholder="Lead Analyst Initials" required=""/>*!/*/}
      // {/*      /!*      </div>*!/*/}
      // {/*      /!*      <div>*!/*/}
      // {/*      /!*        <input type="text" className="form-control" placeholder="Event Name" required=""/>*!/*/}
      // {/*      /!*      </div>*!/*/}
      // {/*      /!*      <div>*!/*/}
      // {/*      /!*        <input type="text" className="form-control" placeholder="IP Address" required=""/>*!/*/}
      // {/*      /!*      </div>*!/*/}
      // {/*      /!*      <div>*!/*/}
      // {/*      /!*        <a className="btn btn-default submit" href="events.html">Submit</a>*!/*/}
      // {/*      /!*      </div>*!/*/}
      //
      // {/*      /!*      <div className="clearfix"></div>*!/*/}
      // {/*      /!*    </form>*!/*/}
      // {/*      /!*  </section>*!/*/}
      // {/*      /!*</div>*!/*/}
      // {/*    </div>*/}
      // {/*  </div>*/}
      // {/*</body>*/}
      // {/*// <div className="base-container" ref={this.props.containerRef}>*/}
      // {/*//   <div className="header">Login Form</div>*/}
      // {/*//   <div className="content">*/}
      // {/*//     /!*<div className="image">*!/*/}
      // {/*//     /!*  <img src={loginImg} />*!/*/}
      // {/*//     /!*</div>*!/*/}
      // {/*//     <div className="form">*/}
      // {/*//       <div className="form-group">*/}
      // {/*//         /!*<label htmlFor="username">Username</label>*!/*/}
      // {/*//         <input type="text" name="initials" placeholder="initials" />*/}
      // {/*//       </div>*/}
      // {/*//       /!*<div className="form-group">*!/*/}
      // {/*//       /!*  <label htmlFor="password">Password</label>*!/*/}
      // {/*//       /!*  <input type="password" name="password" placeholder="password" />*!/*/}
      // {/*//       /!*</div>*!/*/}
      // {/*//     </div>*/}
      // {/*//   </div>*/}
      // {/*//   <div className="footer">*/}
      // {/*//     <button type="button" className="btn">*/}
      // {/*//       Login*/}
      // {/*//     </button>*/}
      // {/*//   </div>*/}
      // {/*// </div>*/}
    );
  }
}
export default createEvent;
