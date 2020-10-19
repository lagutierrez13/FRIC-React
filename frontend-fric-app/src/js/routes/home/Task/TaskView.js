import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import TaskTable from "./TaskTable";
import DetailedView from "./TaskInfoForm";

class TaskView extends Component {
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
          title="Task"
          onSearch={(text) => console.log(text)}
        />

        <Clearfix />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Overview"></XPanel.Title>
              <XPanel.Content>
                <TaskTable />
              </XPanel.Content>
            </XPanel>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Detailed"></XPanel.Title>
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

export default TaskView;
