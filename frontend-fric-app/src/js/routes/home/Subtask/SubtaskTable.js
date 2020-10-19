import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SubtaskTable extends Component {
  constructor(props) {
    super(props);
    this.state = { subtasks: [] };
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
