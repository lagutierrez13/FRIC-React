import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { XPanel, PageTitle } from "../src/js/components";
import GeneralForm from "./GeneralForm";
import SystemTable from "../src/js/routes/home/System/SystemTable";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/*  top tiles  */}
        <TopTile />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <NetworkActivities />
          </Col>
        </Row>
        <br />
      </div>
    );
  }
}

export default Dashboard;
