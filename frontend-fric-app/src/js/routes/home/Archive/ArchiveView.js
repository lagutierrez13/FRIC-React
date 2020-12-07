import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import TaskTable from "../Task/TaskTable";

class ArchiveView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        panelVisible: true,
        selectedTasks: [],
      };
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleSelected = this.handleSelected.bind(this);
    }

    handleOnChange(name,value) {
        //alert("NAME " + name + " value " + value[0].tasktitle)
        //const val = value
        //const n = name
        this.setState({ [name] : value })
    }
    handleSelected() {
        const items = this.state.selectedTasks;
        alert("Selected items are: " + JSON.stringify(items));
    }
  
    render() {
      const { panelVisible } = this.state;
      const onHide = (e) => this.setState({ panelVisible: !panelVisible });
  
      return (
        <div>
          <PageTitle
            showSearch
            title="Archive"
            onSearch={(text) => console.log(text)}
          />
  
          <Clearfix />
          <Row>
            <Col md={12} sm={12} xs={12}>
              <XPanel visible={panelVisible} onHide={onHide}>
                <XPanel.Title title="Archived Tasks"></XPanel.Title>
                <XPanel.Content>
                  <TaskTable displayArchive={1} handleOnChange={this.handleOnChange} />
                  <button class="btn btn-primary" onClick={this.handleSelected}>Restore</button>
                </XPanel.Content>
              </XPanel>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} xs={12}>
              {/* <XPanel visible={panelVisible} onHide={onHide}>
                <XPanel.Title title="Detailed"></XPanel.Title>
                <XPanel.Content>
                  <DetailedView />
                </XPanel.Content>
              </XPanel> */}
            </Col>
          </Row>
        </div>
      );
    }
  }
  
  export default ArchiveView;