import React, { Component } from "react";

class SystemTable extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                <input type="checkbox" id="check-all"></input>
              </th>
              <th>System Name</th>
              <th>No. of Tasks</th>
              <th>No. of Findings</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default SystemTable;
