import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Tooltip = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Fill out Finding Information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class DetailedView extends Component {
  constructor(props) {
    super(props);
  }

  // what you see
  render() {
    return (
      // x_panel is container
      <div class="x_panel" >
          <Tooltip />
        <div class="x_content">
          <form>
            <div class="x_panel tile">
                {/* Finding information */}
                <div class="x_title">
                    <h2>
                        Finding Information <Tooltip />
                    </h2>
                    <div class="clearfix"></div>
                </div>
                {/* ID */}
                <div class="form-group row">
                <label class="control-label  col-sm-2 ">ID</label>
                <div class=" col-sm-10 ">
                    <input type="text" class="form-control" />
                </div>
                </div>
                {/*  Host Name */}
                <div class="form-group row">
                <label class="control-label  col-sm-2 ">Host Name</label>
                <div class=" col-sm-10 ">
                    <input type="text" class="form-control" />
                </div>
                </div>
                {/* IP port */}
                <div class="form-group row">
                <label class="control-label  col-sm-2 ">IP Port</label>
                <div class=" col-sm-10 ">
                    <input type="text" class="form-control" />
                </div>
                </div>
                {/* Description */}
                <div class="form-group row">
                <label class="control-label  col-sm-2 ">Description</label>
                <div class=" col-sm-10 ">
                <textarea
                    rows = "2" type="text" class="form-control" ></textarea>
                </div>
                </div>
                {/* Long description */}
                <div class="form-group row">
                <label class="control-label  col-sm-2 ">Long description</label>
                <div class=" col-sm-10 ">
                    <textarea
                    rows = "4" type="text" class="form-control" ></textarea>
                </div>
                </div>
                {/* Status */}
                <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Status</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                    <select
                        class="form-control"
                        // value={this.state.type}
                        // onChange={this.onChangeType}
                    >
                        {/* {this.state.valuesType.map((value) => (
                        <option>{value}</option>
                        ))} */}
                    </select>
                    }
                </div>
                </div>
                {/* Type */}
                <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Type</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                    <select
                        class="form-control"
                        // value={this.state.type}
                        // onChange={this.onChangeType}
                    >
                        {/* {this.state.valuesType.map((value) => (
                        <option>{value}</option>
                        ))} */}
                    </select>
                    }
                </div>
                </div>
                {/* Classification */}
                <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Classification</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                    <select
                        class="form-control"
                        // value={this.state.type}
                        // onChange={this.onChangeType}
                    >
                        {/* {this.state.valuesType.map((value) => (
                        <option>{value}</option>
                        ))} */}
                    </select>
                    }
                </div>
                </div>
                {/* System */}
                <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">System</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                    <select
                        class="form-control"
                        // value={this.state.type}
                        // onChange={this.onChangeType}
                    >
                        {/* {this.state.valuesType.map((value) => (
                        <option>{value}</option>
                        ))} */}
                    </select>
                    }
                </div>
                </div>
                <h3> OR </h3>
                {/* Task */}
                <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Task</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                    <select
                        class="form-control"
                        // value={this.state.type}
                        // onChange={this.onChangeType}
                    >
                        {/* {this.state.valuesType.map((value) => (
                        <option>{value}</option>
                        ))} */}
                    </select>
                    }
                </div>
                </div>
                <h3> OR </h3>
                {/* Subtask */}
                <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Subtask</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                    <select
                        class="form-control"
                        // value={this.state.type}
                        // onChange={this.onChangeType}
                    >
                        {/* {this.state.valuesType.map((value) => (
                        <option>{value}</option>
                        ))} */}
                    </select>
                    }
                </div>
                </div>

            </div>
            
            {/* Finding Impact */}
            <div class="x_title">
                <h2> Finding Impact</h2>
                <div class="clearfix"></div>
            </div>
            {/* Analyst Information */}
            <div class="x_title">
                <h2> Analyst Information</h2>
                <div class="clearfix"></div>
            </div>
            {/* Mitigation */}
            <div class="x_title">
                <h2> Mitigation</h2>
                <div class="clearfix"></div>
            </div>
            {/* Threat */}
            <div class="x_title">
                <h2> Threat</h2>
                <div class="clearfix"></div>
            </div>
            {/* Counter Measure */}
            <div class="x_title">
                <h2> Counter Measure</h2>
                <div class="clearfix"></div>
            </div>
            {/* Impact */}
            <div class="x_title">
                <h2> Impact</h2>
                <div class="clearfix"></div>
            </div>
            {/* Severity*/}
            <div class="x_title">
                <h2> Severity</h2>
                <div class="clearfix"></div>
            </div>
            {/* Risk */}
            <div class="x_title">
                <h2> Hello</h2>
                <div class="clearfix"></div>
            </div>
            {/* Finding System Level Impact*/}
            <div class="x_title">
                <h2> Finding System level impact</h2>
                <div class="clearfix"></div>
            </div>
            {/* Buttons */}
            <br />
            <div class="item form-group">
              <button class="btn btn-primary" type="submit" value="Save Task">
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