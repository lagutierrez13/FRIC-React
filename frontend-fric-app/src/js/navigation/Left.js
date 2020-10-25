import React, { Component } from "react";
// import { Link } from 'react-router-dom'

class Left extends Component {
  render() {
    return (
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{ border: 0 }}>
            <a href="index.html" className="site_title">
              <i className="fa fa-shield"></i> <span>FRIC</span>
            </a>
          </div>

          <div className="clearfix"></div>

          {/* menu profile quick info */}
          <div className="profile clearfix">
            <div className="profile_info">
              <span>Welcome,</span>
              <h2>User</h2>
            </div>
          </div>
          {/* /menu profile quick info */}

          <br />

          {/* sidebar menu */}
          {this.props.children}
          {/*/sidebar menu*/}

          {/*/menu footer buttons*/}
          <div className="sidebar-footer hidden-small">
            <a
              data-toggle="tooltip"
              data-placement="top"
              title="Logout"
              href=""
            >
              <span
                className="glyphicon glyphicon-off"
                aria-hidden="true"
              ></span>
            </a>
          </div>
          {/*/menu footer buttons*/}
        </div>
      </div>
    );
  }
}

export default Left;
