import React from "react";
import { Button, Modal } from "react-bootstrap";

class EditAnalystModal extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);

    this.state = {
      showHide: false,
      analyst: props.analyst,
      newInitials: props.analyst.initials,
      newFirst: props.analyst.first,
      newLast: props.analyst.last,
      newTitle: props.analyst.title,
      newIP: props.analyst.ip,
    };
  }

  onChangeInitials(e) {
    this.setState({
      newInitials: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      newFirst: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      newLast: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      newTitle: e.target.value,
    });
  }

  onChangeIP(e) {
    this.setState({
      newIP: e.target.value,
    });
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Edit
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Edit Analyst</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <form
          onSubmit={this.onSubmitLead}
          class="form-horizontal form-label-left"
        >
          <div class="form-group row ">
            <label class="control-label col-md-3 col-sm-3 ">Initials</label>
            <div class="col-md-9 col-sm-9 ">
              <input
                type="text"
                class="form-control"
                defaultValue={this.state.newInitials}
                onChange={this.onChangeInitials}
              />
            </div>
          </div>
          <div class="form-group row ">
            <label class="control-label col-md-3 col-sm-3 ">First Name</label>
            <div class="col-md-9 col-sm-9 ">
              <input
                type="text"
                class="form-control"
                defaultValue={this.state.analyst.first}
                onChange={this.onChangeLeadFirstName}
              />
            </div>
          </div>
          <div class="form-group row ">
            <label class="control-label col-md-3 col-sm-3 ">Last Name</label>
            <div class="col-md-9 col-sm-9 ">
              <input
                type="text"
                class="form-control"
                defaultValue={this.state.analyst.last}
                onChange={this.onChangeLeadFirstName}
              />
            </div>
          </div>
          <div class="form-group row ">
            <label class="control-label col-md-3 col-sm-3 ">Title</label>
            <div class="col-md-9 col-sm-9 ">
              <input
                type="text"
                class="form-control"
                defaultValue={this.state.analyst.title}
                onChange={this.onChangeLeadFirstName}
              />
            </div>
          </div>
          <div class="form-group row ">
            <label class="control-label col-md-3 col-sm-3 ">IP</label>
            <div class="col-md-9 col-sm-9 ">
              <input
                type="text"
                class="form-control"
                defaultValue={this.state.analyst.ip}
                onChange={this.onChangeLeadFirstName}
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

export default EditAnalystModal;
