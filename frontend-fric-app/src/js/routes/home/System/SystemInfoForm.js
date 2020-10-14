import React, { Component } from "react";
import axios from "axios";
// System Detailed View

class DetailedView extends Component {
  render() {
    return (
      <div class="x_panel">
        <div class="x-title">
          <h2>System Information</h2>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form>
            {/* System Name */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">System Name</label>
              <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* System Description */}
            <div class="form-group row">
              <label class="control-label col-sm-2">System Description</label>
              <div class=" col-sm-10">
                <textarea class="form-control" rows="4"></textarea>
              </div>
            </div>
            {/* System Assessment Location */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">
                System's Assessment Location
              </label>
              <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Location Room Number */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">
                Location Room Number
              </label>
              <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Event Router */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">Event Router</label>
              <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Event Switch (what switch????) */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">Event Switch</label>
              <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Test Plan */}
            <div class="form-group row">
              <label class="control-label col-sm-2">Test Plan</label>
              <div class=" col-sm-10">
                <textarea class="form-control" rows="4"></textarea>
              </div>
            </div>
            {/* Buttons */}
            <br />
            <div class="item form-group">
              <button class="btn btn-primary" type="submit" value="Save Event">
                Save
              </button>
              <button class="btn btn-danger" type="cancel">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DetailedView;
