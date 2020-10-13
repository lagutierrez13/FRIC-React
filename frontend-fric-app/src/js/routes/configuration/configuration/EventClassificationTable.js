import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { XPanel } from "../../../components";

class EventClassificationTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelVisible: true,
    };
  }

  render() {
    const { panelVisible } = this.state;
    const onHide = (e) => this.setState({ panelVisible: !panelVisible });

    return (
      <Col md={6} sm={6} xs={12}>
        <XPanel visible={panelVisible} onHide={onHide}>
          <XPanel.Title title="Event Classification Table">
            <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
            <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
          </XPanel.Title>
          <XPanel.Content>
            <form onSubmit={this.onSubmit}>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="required"
                  id="eventClassificationRequired"
                  value="Required"
                />
                <label className="form-check-label">Required</label>
              </div>
              <div className="form-group">
                <input
                  value="Top Secret"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input value="Secret" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <input
                  value="Confidential"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  value="Unclassified"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Add" className="btn btn-primary" />
                <input type="submit" value="Save" className="btn btn-success" />
              </div>
            </form>
          </XPanel.Content>
        </XPanel>
      </Col>
    );
  }
}

export default EventClassificationTable;
