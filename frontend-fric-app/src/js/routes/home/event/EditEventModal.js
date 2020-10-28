import React from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

class EditEventModal extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeVersion = this.onChangeVersion.bind(this);
    this.onChangeAssesDate = this.onChangeAssesDate.bind(this);
    this.onChangeSCTG = this.onChangeSCTG.bind(this);
    this.onChangeClassification = this.onChangeClassification.bind(this);
    this.onChangeDeclassDate = this.onChangeDeclassDate.bind(this);
    this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
    this.onChangeOrganizationName = this.onChangeOrganizationName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      showHide: false,
      event: props.event,
      _id: props.event._id,
      newName: props.event.name,
      newDescription: props.event.description,
      newType: props.event.type,
      newVersion: props.event.version,
      newAssessDate: props.event.assessdate,
      newSctg: props.event.sctg,
      newClassification: props.event.classification,
      newDeclassificationDate: props.event.declassificationdate,
      newCustomerName: props.event.customername,
      newOrganizationName: props.event.organizationname,
      valuesClassification: [1, 2, 3],
      valuesType: [1, 2, 3],
    };
  }

  onChangeName(e) {
    this.setState({
      newName: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      newDescription: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      newType: e.target.value,
    });
  }

  onChangeVersion(e) {
    this.setState({
      newVersion: e.target.value,
    });
  }

  onChangeAssesDate(e) {
    this.setState({
      newAssessDate: e.target.value,
    });
  }

  onChangeSCTG(e) {
    this.setState({
      newSctg: e.target.value,
    });
  }

  onChangeClassification(e) {
    this.setState({
      newClassification: e.target.value,
    });
  }

  onChangeDeclassDate(e) {
    this.setState({
      newDeclassificationDate: e.target.value,
    });
  }

  onChangeCustomerName(e) {
    this.setState({
      newCustomerName: e.target.value,
    });
  }

  onChangeOrganizationName(e) {
    this.setState({
      newOrganizationName: e.target.value,
    });
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  onSubmit(e) {
    e.preventDefault();

    const updatedEvent = {
      name: this.state.newName,
      description: this.state.newDescription,
      type: this.state.newType,
      version: this.state.newVersion,
      assessdate: this.state.newAssessDate,
      sctg: this.state.newSctg,
      classification: this.state.newClassification,
      declassificationdate: this.state.newDeclassificationDate,
      customername: this.state.newCustomerName,
      organizationname: this.state.newOrganizationName,
    };

    console.log(`Name: ${updatedEvent.name}`);
    console.log(`Description: ${updatedEvent.description}`);
    console.log(`Type: ${updatedEvent.type}`);
    console.log(`Version: ${updatedEvent.version}`);
    console.log(`Assess Date: ${updatedEvent.assessdate}`);

    const newHistory = {
      action: `Event: ${this.state.newName} was edited`,
      analyst: "",
    };

    axios
      .put(`http://localhost:4000/home/event/update/${this.state._id}`, updatedEvent)
      .then((res) => console.log(res.data));

    axios
      .post("http://localhost:4000/history/new", newHistory)
      .then((res) => console.log(res.data));
  }

  render() {
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
                    defaultValue={this.state.event.name}
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
                    defaultValue={this.props.event.description}
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
                    defaultValue={this.state.event.version}
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
                    defaultValue={this.state.event.assessdate}
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
                    defaultValue={this.state.event.organizationname}
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
                    defaultValue={this.state.event.sctg}
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
                    defaultValue={this.state.event.declassificationdate}
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
                    defaultValue={this.state.event.customername}
                    onChange={this.onChangeCustomerName}
                  />
                </div>
              </div>
              <button
                class="btn btn-danger"
                type="button"
                onClick={() => this.handleModalShowHide()}
              >
                Cancel
              </button>
              <button
                class="btn btn-primary"
                type="submit"
                onClick={() => this.handleModalShowHide()}
              >
                Save Changes
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditEventModal;
