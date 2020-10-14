import React, { Component } from "react";

class EventTable extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                <input type="checkbox" id="check-all"></input>
              </th>
              <th>Event Name</th>
              <th>No. of Systems</th>
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

export default EventTable;
