import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import TaskTable from "../Task/TaskTable";
import SubtaskTable from "../Subtask/SubtaskTable";
import SystemTable from "../System/SystemTable";
import FindingTable from "../finding/FindingTable";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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
    const percentage = 40;
    const percentage2 = 50;
    const percentage3 = 70;
    const percentage4 = 90;

    return (

      <div>
        <PageTitle
          showSearch
          onSearch={(text) => console.log(text)}
          title="Analyst Progress View"
          onSearch={(text) => console.log(text)}
        />



          <Col md={3} sm={3} xs={3}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Event Progress"></XPanel.Title>
              <XPanel.Content>
                <div style={{width: 200, height: 200}}>
                  <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>

              </XPanel.Content>
            </XPanel>
          </Col>

        <Col md={3} sm={3} xs={3}>
          <XPanel visible={panelVisible} onHide={onHide}>
            <XPanel.Title title="System Progress"></XPanel.Title>
            <XPanel.Content>
              <div style={{width: 200, height: 200}}>
                <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
              </div>

            </XPanel.Content>
          </XPanel>
        </Col>



          <Col md={3} sm={3} xs={3}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Task Progress"></XPanel.Title>
              <XPanel.Content>
                <div style={{width: 200, height: 200}}>
                  <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
                </div>

              </XPanel.Content>
            </XPanel>
          </Col>


          <Col md={3} sm={3} xs={3}>
            <XPanel visible={panelVisible} onHide={onHide}>
              <XPanel.Title title="Subtask Progress"></XPanel.Title>
              <XPanel.Content>
                <div style={{width: 200, height: 200}}>
                  <CircularProgressbar value={percentage4} text={`${percentage4}%`} />
                </div>

              </XPanel.Content>
            </XPanel>
          </Col>




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
                <FindingTable />
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
