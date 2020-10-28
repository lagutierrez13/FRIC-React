import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import TaskTable from "../Task/TaskTable";
import SubtaskTable from "../Subtask/SubtaskTable";
import FindingOverviewTable from "../findings/FindingOverviewTable";
import SystemTable from "../System/SystemTable";

class AnalystProgressView extends Component {
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
          title="Analyst Progress View"
          onSearch={(text) => console.log(text)}
        />
        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Tasks Overview Table"></XPanel.Title>
              <XPanel.Content>
                <TaskTable />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Subtasks Overview Table"></XPanel.Title>
              <XPanel.Content>
                <SubtaskTable />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Findings Overview Table"></XPanel.Title>
              <XPanel.Content>
                <FindingOverviewTable />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Systems Overview Table"></XPanel.Title>
              <XPanel.Content>
                <SystemTable />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
      </div>
    );
  }

}

export default AnalystProgressView;
