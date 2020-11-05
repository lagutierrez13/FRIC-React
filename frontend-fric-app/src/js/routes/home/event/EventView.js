import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";

import { XPanel, PageTitle } from "../../../components";
import DetailedView from "./EventInfoForm";
import EventTable from "./EventTable";
import TeamInfo from "./EventTeamInfo";



class EventView extends Component {
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
          title="Event"
          onSearch={(text) => console.log(text)}
        />

        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Event Overview">
                <XPanel.MenuItem>Settings 1</XPanel.MenuItem>
                <XPanel.MenuItem>Settings 2</XPanel.MenuItem>
              </XPanel.Title>
              <XPanel.Content>
                <EventTable />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Event Detailed View"></XPanel.Title>

              <XPanel.Content>
                <DetailedView />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Event Team Information"></XPanel.Title>
              <XPanel.Content>
                <TeamInfo />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>

      </div>
    );
  }
}

export default EventView;
