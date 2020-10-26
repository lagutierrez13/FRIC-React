import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TaskTable extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>Overall Tasks Table</h2>

          <div class="clearfix"></div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>System</th>
              <th>Analyst</th>
              <th>Priority</th>
              <th>Progress</th>
              <th>No. of Subtasks</th>
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

export default TaskTable;
