import React from "react";
import { Button, Modal } from "react-bootstrap";

class EditEventModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
      valuesClassification: [1, 2, 3],
      valuesType: [1, 2, 3],
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    const {
      name,
      description,
      no_of_findings,
      no_of_systems,
      type,
      version,
      assessdate,
      sctg,
      classification,
      declassificationdate,
      customername,
      organizationname,
    } = this.props.event;
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Edit
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Edit Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              {/* Event name */}
              <div class="form-group row">
                <label class="control-label  col-sm-2 ">Event Name</label>
                <div class=" col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    value={name}
                    onChange={this.onChangeName}
                  />
                </div>
              </div>
              {/* Event Description */}
              <div class="form-group row">
                <label class="control-label col-sm-2">Event Description</label>
                <div class=" col-sm-10">
                  <textarea
                    class="form-control"
                    rows="4"
                    value={description}
                    onChange={this.onChangeDescription}
                  ></textarea>
                </div>
              </div>
              {/* event type */}
              <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">
                  Event Type
                </label>
                <div class="col-md-10 col-sm-10 ">
                  {
                    <select
                      class="form-control"
                      value={this.state.type}
                      onChange={this.onChangeType}
                    >
                      {this.state.valuesType.map((value) => (
                        <option>{value}</option>
                      ))}
                    </select>
                  }
                </div>
              </div>
              {/* Event Version */}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">
                  Event Version
                </label>
                <div class="col-md-10 col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    value={version}
                    onChange={this.onChangeVersion}
                  />
                </div>
              </div>
              {/* Assesment Date */}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">
                  Assesment Date
                </label>
                <div class="col-md-10 col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    value={assessdate}
                    onChange={this.onChangeAssesDate}
                  />
                </div>
              </div>
              {/* Organization Name */}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">
                  Organization Name
                </label>
                <div class="col-md-10 col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    value={organizationname}
                    onChange={this.onChangeOrganizationName}
                  />
                </div>
              </div>
              {/*  Security Classification Title Guide*/}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">
                  Security Classification Title Guide
                </label>
                <div class="col-md-10 col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    value={sctg}
                    onChange={this.onChangeSCTG}
                  />
                </div>
              </div>
              {/* Event Classificatrion */}
              <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">
                  Event Classification
                </label>
                <div class="col-md-10 col-sm-10 ">
                  <select
                    class="form-control"
                    value={this.state.classification}
                    onChange={this.onChangeClassification}
                  >
                    {this.state.valuesClassification.map((value) => (
                      <option>{value}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Declassification Date */}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">
                  Declassification Date
                </label>
                <div class="col-md-10 col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    value={declassificationdate}
                    onChange={this.onChangeDeclassDate}
                  />
                </div>
              </div>
              {/* Customer Name */}
              <div class="form-group row ">
                <label class="control-label col-md-2 col-sm-2 ">
                  Customer Name
                </label>
                <div class="col-md-10 col-sm-10 ">
                  <input
                    type="text"
                    class="form-control"
                    value={customername}
                    onChange={this.onChangeCustomerName}
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              class="btn btn-danger"
              type="button"
              onClick={() => this.handleModalShowHide()}
            >
              Cancel
            </button>
            <button
              class="btn btn-primary"
              type="button"
              onClick={() => this.handleModalShowHide()}
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditEventModal;
