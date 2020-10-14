import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import GeneralForm from "./GeneralForm";
import SystemTable from "./SystemTable";

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
