import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import axios from "axios";
import "reactjs-popup/dist/index.css";


const Finding = (props) => (
  <tr>
    <td><input type="checkbox" type={props.Finding.findingID}></input></td>
    <td>{props.Finding.findingID}</td>
    <td>{props.Finding.title}</td>
    <td>{props.Finding.findingID}</td>
    <td>{props.Finding.findingSystem}</td>
    <td>{props.Finding.findingTask}</td>
    <td>{props.Finding.findingSubtask}</td>
    <td>{props.Finding.findingAnalyst}</td>
    <td>{props.Finding.status}</td>
    <td>{props.Finding.classification}</td>
    <td>{props.Finding.type}</td>
    <td>{props.Finding.risk}</td>
    <td></td>
    <td>
      <Link to={"/update/" + props.finding._id}>Edit</Link>
    </td>
  </tr>
);

const FindingContentToolTip = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Shows Finding information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class FindingTable extends Component {
  constructor(props) {
    super(props);
    this.state = { findings: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/home/finding/get")
      .then((response) => {
        this.setState({ findings: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  findingList() {
    return this.state.findings.map(function (currentFinding, i) {
      return <Finding finding={currentFinding} key={i} />;
    });
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>
            Finding Contents Table <FindingContentToolTip />
          </h2>

          <div class="clearfix"></div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
                <th></th>
                <th>ID</th>
                <th>Title</th>
                <th>System</th>
                <th>Task</th>
                <th>Subtask</th>
                <th>Analyst</th>
                <th>Status</th>
                <th>Classification</th>
                <th>Type</th>
                <th>Risk</th>
            </tr>
          </thead>
          {/* <tbody>{this.FindingList()}</tbody> */}
        </table>
      </div>
    );
  }
}

export default FindingTable;
