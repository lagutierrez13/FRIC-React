import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

class Dependencies extends Component {
  render() {
    return (
      <div class="x_panel">
        <p>
          In order to run FRIC some Dependencies must be downloaded and
          installed before using the software.
        </p>
        <br></br>
        <div>
          <a href="https://nodejs.org/en/">Node JS (Click Me) </a>
        </div>
        <br></br>
        <div>
          <a href="https://github.com/lagutierrez13/FRIC-React.git">
            Git Repository (Click Me){" "}
          </a>
        </div>
        <div>
          <p>
            After cloning the repo and installing node js, navigate on the
            terminal to the FRIC-React directory and run the following the
            commands:
            <br />
            <code>npm install</code>
            <br />
            <code>npm start</code>
          </p>
        </div>
      </div>
    );
  }
}

export default Dependencies;
