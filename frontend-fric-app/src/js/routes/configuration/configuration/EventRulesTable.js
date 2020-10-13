import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { XPanel } from "../../../components";

class EventRulesTable extends Component {
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
      <Col md={12} sm={12} xs={12}>
        <XPanel visible={panelVisible} onHide={onHide}>
          <XPanel.Title title="Event Rules Table">
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

export default EventRulesTable;
