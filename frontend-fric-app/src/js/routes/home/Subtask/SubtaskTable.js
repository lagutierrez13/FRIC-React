import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Subtask = (props) => (
  <tr>
    <td>{props.subtask.subtasktitle}</td>
    <td>{props.subtask.parent_task}</td>
    <td>{props.subtask.working_analyst}</td>
    <td>{props.subtask.subtask_progress}</td>
    <td>{props.subtask.no_of_findings}</td>
    <td>{props.subtask.due_date}</td>
    <td></td>
    <td>
      <Link to={"/update/" + props.subtask._id}>Edit</Link>
    </td>
  </tr>
);

class SubtaskTable extends Component {
  constructor(props) {
    super(props);
    this.state = { subtasks: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/home/subtasks/get")
      .then((response) => {
        this.setState({ subtasks: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  subtaskList() {
    return this.state.subtasks.map(function (currentSubtask, i) {
      return <Subtask subtask={currentSubtask} key={i} />;
    });
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>Overall Subtasks Table</h2>

          <div class="clearfix"></div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Task</th>
              <th>Analyst</th>
              <th>Progress</th>
              <th>No. of Findings</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default SubtaskTable;
