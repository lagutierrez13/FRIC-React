import React, { Component } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Tooltip = () => (
  <Popup trigger={<button>?</button>} position="right center">
    {(close) => (
      <div>
        Fill out Task Information
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

class CreateSubtask extends Component {
  constructor(props) {
    super(props);
  }

  // what you see
  render() {
    return (
      // x_panel is container
      <div class="x_panel">
        <div class="x_title">
          <h2>
            Create Subtask <Tooltip />
          </h2>

          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form>
            {/* Task name */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">Subtask Title</label>
              <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Task Description */}
            <div class="form-group row">
              <label class="control-label col-sm-2">Subtask Description</label>
              <div class=" col-sm-10">
                <textarea class="form-control" rows="4"></textarea>
              </div>
            </div>
            {/* Progress */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">Progress</label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Due Date */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Due date</label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Analyst*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">Analysts</label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control"></select>
              </div>
            </div>
            {/* Collaborator*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Collaborator
              </label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control"></select>
              </div>
            </div>
            {/* Tasks */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Tasks</label>
              <div class="col-md-10 col-sm-10 ">
                <select class="form-control"></select>
              </div>
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

export default CreateSubtask;
