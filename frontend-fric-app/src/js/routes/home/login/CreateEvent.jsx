import React from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { Link } from 'react-router-dom';

//import loginImg from "../../login.svg";

export class createEvent extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <body className="login">
      <div>
        <a className="hiddenanchor" id="signup"></a>
        <a className="hiddenanchor" id="signin"></a>

        <div className="login_wrapper" ref={this.props.containerRef}>
          <div className="animate form login_form">
            <section className="login_content" ref={this.props.containerRef}>
              <form>
                <h1>Create Account</h1>
                <div>
                  <input type="text" className="form-control" placeholder="Lead Analyst Initials" required=""/>
                </div>
                <div>
                  <input type="text" className="form-control" placeholder="Event Name" required=""/>
                </div>
                <div>
                  <input type="text" className="form-control" placeholder="IP Address" required=""/>
                </div>
                <div>
                </div>
                <div>
                  <a className="btn btn-default submit" href="EventView.js">Submit</a>
                </div>

                <div className="clearfix"></div>

                {/*<div className="separator">*/}
                {/*  <p className="change_link">New Event?*/}
                {/*    /!*<Link to="/createEvent"><button>*!/*/}
                {/*    /!*  Create Event*!/*/}
                {/*    /!*</button>*!/*/}
                {/*    /!*</Link>*!/*/}
                {/*    /!*<Link to="/createEvent">*!/*/}
                {/*    /!*  <button type="button">*!/*/}
                {/*    /!*    Create Event*!/*/}
                {/*    /!*  </button>*!/*/}
                {/*    /!*</Link>*!/*/}
                {/*    <a href="createEvent.jsx" className="to_register"> Create Event </a>*/}
                {/*  </p>*/}

                {/*  <div className="clearfix"></div>*/}
                {/*  <br/>*/}

                {/*</div>*/}
              </form>
            </section>
          </div>

          {/*<div id="register" className="animate form registration_form">*/}
          {/*  <section className="login_content">*/}
          {/*    <form>*/}
          {/*      <h1>Create Account</h1>*/}
          {/*      <div>*/}
          {/*        <input type="text" className="form-control" placeholder="Lead Analyst Initials" required=""/>*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <input type="text" className="form-control" placeholder="Event Name" required=""/>*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <input type="text" className="form-control" placeholder="IP Address" required=""/>*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <a className="btn btn-default submit" href="events.html">Submit</a>*/}
          {/*      </div>*/}

          {/*      <div className="clearfix"></div>*/}
          {/*    </form>*/}
          {/*  </section>*/}
          {/*</div>*/}

        </div>
      </div>
      </body>
      // <div className="base-container" ref={this.props.containerRef}>
      //   <div className="header">Login Form</div>
      //   <div className="content">
      //     {/*<div className="image">*/}
      //     {/*  <img src={loginImg} />*/}
      //     {/*</div>*/}
      //     <div className="form">
      //       <div className="form-group">
      //         {/*<label htmlFor="username">Username</label>*/}
      //         <input type="text" name="initials" placeholder="initials" />
      //       </div>
      //       {/*<div className="form-group">*/}
      //       {/*  <label htmlFor="password">Password</label>*/}
      //       {/*  <input type="password" name="password" placeholder="password" />*/}
      //       {/*</div>*/}
      //     </div>
      //   </div>
      //   <div className="footer">
      //     <button type="button" className="btn">
      //       Login
      //     </button>
      //   </div>
      // </div>
    );
  }
}


