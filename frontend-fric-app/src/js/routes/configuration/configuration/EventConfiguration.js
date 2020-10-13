import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { XPanel } from "../../../components";
import EventClassificationTable from "./EventClassificationTable"

class EventConfiguration extends Component {
  render() {

    const { panelVisible } = this.state;
    const onHide = (e) => this.setState({ panelVisible: !panelVisible });

    return (
        <Row>
        <Col md={12} sm={12} xs={12}>
          <XPanel visible={panelVisible} onHide={onHide}>
            <XPanel.Title title="Event Configuration">
              <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
              <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
            </XPanel.Title>
            <XPanel.Content>
              <EventClassificationTable/>
            </XPanel.Content>
          </XPanel>
        </Col>
      </Row>
    );
  }
}

export default EventConfiguration;
