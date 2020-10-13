import React, { Component } from "react";

class DetailedView extends Component {
  render() {
    return (
      // x_panel is container
      <div class="x_panel">
        <div class="x_title">
          <h2>Event Information</h2>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <form>
            {/* Event name */}
            <div class="form-group row">
              <label class="control-label  col-sm-2 ">Event Name</label>
              <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Event Description */}
            <div class="form-group row">
              <label class="control-label col-sm-2">Event Description</label>
              <div class=" col-sm-10">
                <textarea class="form-control" rows="4"></textarea>
              </div>
            </div>
            {/* event type */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Event Type</label>
              <div class="col-md-10 col-sm-10 ">
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
              <label class="control-label col-md-2 col-sm-2 ">
                Event Version
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Assesment Date */}

            {/* Organization Name */}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Organization Name
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/*  Security Classification Title Guide*/}
            <div class="form-group row ">
              <label class="control-label col-md-2 col-sm-2 ">
                Security Classification Title Guide
              </label>
              <div class="col-md-10 col-sm-10 ">
                <input type="text" class="form-control" />
              </div>
            </div>
            {/* Event Classificatrion */}
            <div class="form-group row">
              <label class="control-label col-md-2 col-sm-2 ">Event Type</label>
              <div class="col-md-10 col-sm-10 ">
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
              <label class="control-label col-md-2 col-sm-2 ">
                Customer Name
              </label>
              <div class="col-md-10 col-sm-10 ">
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
