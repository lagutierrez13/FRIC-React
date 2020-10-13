import React, { Component } from "react";

class TeamInfo extends Component {
  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>Team Information</h2>
          <div class="clearfix"></div>
        </div>
        {/* Lead */}
        <div class="col-md-6 col-sm-6 ">
          <div class="x_panel tile">
            <div class="x-title">
              <h2>Lead Analyst</h2>
              <div class="clearfix"></div>
            </div>
            {/* lead table */}
            <div class="x_content">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="check-all"></input>
                    </th>
                    <th>Options</th>
                    <th>Initials</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
          {/* settings container */}
          <div class="x_content">
            <div class="x_title">
              <h2>Settings</h2>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">
              <ul class="nav nav-tabs bar_tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="editlead-tab"
                    data-toggle="tab"
                    href="#editlead"
                    role="tab"
                    aria-controls="editlead"
                    aria-selected="true"
                  >
                    Add/Edit
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="synclead-tab"
                    data-toggle="tab"
                    href="#synclead"
                    role="tab"
                    aria-controls="synclead"
                    aria-selected="false"
                  >
                    Sync
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Analyst */}
        <div class="col-md-6 col-sm-6 ">
          <div class="x_panel tile">
            <div class="x-title">
              <h2>Analyst</h2>
              <div class="clearfix"></div>
            </div>
            <div class="x_content">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="check-all"></input>
                    </th>
                    <th>Options</th>
                    <th>Initials</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamInfo;
