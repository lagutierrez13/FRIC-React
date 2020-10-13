import React, { Component } from "react";

class DetailedView extends Component {
  render() {
    return (
      // x_panel is container
      <div class="x_panel">
        <div class="x_tittle">
          <h2>Event Information</h2>
        </div>
        <div class="x_content ">
          <form class="form-horizontal form-label-left">
            {/* Event name */}
            <div class="form-group row ">
              <label class="control-label col-md-3 col-sm-3 ">Event Name</label>
              <div class="col-md-9 col-sm-9 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Event Description */}
            <div class="form-group row ">
              <label class="control-label col-md-3 col-sm-3 ">
                Event Description
              </label>
              <div class="col-md-9 col-sm-9 ">
                <textarea class="form-control" rows="4"></textarea>
              </div>
            </div>
            {/* event type */}
            <div class="form-group row">
              <label class="control-label col-md-3 col-sm-3 ">Event Type</label>
              <div class="col-md-9 col-sm-9 ">
                <select class="form-control">
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
                </select>
              </div>
            </div>
            {/* Event Version */}
            <div class="form-group row ">
              <label class="control-label col-md-3 col-sm-3 ">
                Event Version
              </label>
              <div class="col-md-9 col-sm-9 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Assesment Date */}

            {/* Organization Name */}
            <div class="form-group row ">
              <label class="control-label col-md-3 col-sm-3 ">
                Organization Name
              </label>
              <div class="col-md-9 col-sm-9 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/*  Security Classification Title Guide*/}
            <div class="form-group row ">
              <label class="control-label col-md-3 col-sm-3 ">
                Security Classification Title Guide
              </label>
              <div class="col-md-9 col-sm-9 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Event Classificatrion */}
            <div class="form-group row">
              <label class="control-label col-md-3 col-sm-3 ">Event Type</label>
              <div class="col-md-9 col-sm-9 ">
                <select class="form-control">
                  <option>Choose option</option>
                  <option>Option one</option>
                  <option>Option two</option>
                  <option>Option three</option>
                  <option>Option four</option>
                </select>
              </div>
            </div>
            {/* Declassification Date */}
            {/* Customer Name */}
            <div class="form-group row ">
              <label class="control-label col-md-3 col-sm-3 ">
                Customer Name
              </label>
              <div class="col-md-9 col-sm-9 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Buttons */}
            <br />
            <div class="item form-group">
              <button class="btn btn-primary" type="submit">
                Save
              </button>
              <button class="btn btn-danger" type="reset">
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
