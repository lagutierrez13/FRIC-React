import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import Documentation from "./Documentation";
import Dependecies from "./Dependencies";

class HelpView extends Component {
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
      <div>
        <PageTitle
          showSearch
          title="Help"
          onSearch={(text) => console.log(text)}
        />

        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Documentation">
                <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
                <Documentation />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Dependencies">
                <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
                <Dependecies />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HelpView;
