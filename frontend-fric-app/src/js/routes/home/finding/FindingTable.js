import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import axios from "axios";
import "reactjs-popup/dist/index.css";


const Finding = (props) => (
  <tr>
    <td><input type="checkbox" value={props.finding.findingID}></input></td>
    <td>{props.finding.findingID}</td>
    <td>{props.finding.title}</td>
    <td>{props.finding.findingSystem}</td>
    <td>{props.finding.findingTask}</td>
    <td>{props.finding.findingSubtask}</td>
    <td>{props.finding.findingAnalyst}</td>
    <td>{props.finding.status}</td>
    <td>{props.finding.classification}</td>
    <td>{props.finding.type}</td>
    <td>{props.finding.risk}</td>
    <td>
      <Link to={"/update/" + props.finding._id}><span class="glyphicon glyphicon-edit"></span></Link>
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
      .get("http://localhost:4000/home/findings/get")
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
                <th>Edit</th>
            </tr>
          </thead>
          <tbody>{this.findingList()}</tbody>
        </table>
      </div>
    );
  }
}

export default FindingTable;
