import React, { Component } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import EditSystemModal from "./EditSystemModal";
import { ProgressBar } from "react-bootstrap";

const System = (props) => (
  <tr>
    <td>{props.system.systemname}</td>
    <td>{props.system.no_of_tasks}</td>
    <td>{props.system.no_of_findings}</td>
    <td>
      <ProgressBar striped variant="info" now={props.system.progress} />
    </td>
    <td>
      <EditSystemModal system={props.system} />
    </td>
  </tr>
);

const PopupExample = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Shows Systems information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class SystemTable extends Component {
  constructor(props) {
    super(props);
    this.state = { systems: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/home/systems/get")
      .then((response) => {
        this.setState({ systems: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  systemList() {
    return this.state.systems.map(function (currentSystem, i) {
      return <System system={currentSystem} key={i} />;
    });
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>
            System Contents Table <PopupExample />{" "}
          </h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>System Name</th>
                <th>No. of Tasks</th>
                <th>No. of Findings</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>{this.systemList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default SystemTable;
