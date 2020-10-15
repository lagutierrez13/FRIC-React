import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopupExample = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Shows Events information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class EventTable extends Component {
  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>
            Event Contents Table <PopupExample />
          </h2>

          <div class="clearfix"></div>
        </div>

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
