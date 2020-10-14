import React, { Component } from "react";
import axios from "axios";

// System Categorization Dropdowns

class Categorization extends Component {
  render() {
    return (
      <div class="x-panel">
        <div class="x_content">
          <form class="form-horizontal form-label-left">
            {/* Confidentiality */}
            <div class="form-group row">
              <label class="control-label col-sm-2 ">Confidentiality</label>
              <div class="col-sm-10 ">
                <select class="form-control">
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
                </select>
              </div>
            </div>
            {/* Integrity */}
            <div class="form-group row">
              <label class="control-label col-sm-2 ">Integrity</label>
              <div class="col-sm-10 ">
                <select class="form-control">
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
                </select>
              </div>
            </div>
            {/* Availability */}
            <div class="form-group row">
              <label class="control-label col-sm-2 ">Availability</label>
              <div class="col-sm-10 ">
                <select class="form-control">
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
                </select>
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

export default Categorization;
