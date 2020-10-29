import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { XPanel } from "../../../components";

class FindingConfiguration extends Component {
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
      <Row>
        <Col md={12} sm={12} xs={12}>
          <XPanel visible={panelVisible} onHide={onHide}>
            <XPanel.Title title="Finding Configuration">
              <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
              <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
            </XPanel.Title>
            <XPanel.Content>

            </XPanel.Content>
          </XPanel>
        </Col>
      </Row>
    );
  }
}

export default FindingConfiguration;
