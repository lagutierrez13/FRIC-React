import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import FindingTable from "./FindingTable";
import DetailedView from "./FindingForm";

class FindingView extends Component {
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
          title="Findings"
          onSearch={(text) => console.log(text)}
        />

        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Overview"></XPanel.Title>
              <XPanel.Content>
                <FindingTable />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Detailed View"></XPanel.Title>
              <XPanel.Content>
                <DetailedView />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FindingView;