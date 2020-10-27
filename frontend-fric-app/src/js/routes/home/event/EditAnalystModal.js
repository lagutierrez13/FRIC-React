import React from "react";
import { Button, Modal } from "react-bootstrap";

class EditAnalystModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    const { _id, initials, first, last, title, ip, isLead } = this.props.analyst;
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
                value={initials}
                onChange={this.onChangeLeadFirstName}
              />
            </div>
          </div>
          <div class="form-group row ">
            <label class="control-label col-md-3 col-sm-3 ">First Name</label>
            <div class="col-md-9 col-sm-9 ">
              <input
                type="text"
                class="form-control"
                value={first}
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
                value={last}
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
                value={title}
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
                value={ip}
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
