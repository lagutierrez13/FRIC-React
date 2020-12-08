import React, { Component } from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import { XPanel, PageTitle } from "../../../components";
import TaskTable from "../Task/TaskTable";
import axios from "axios";

class ArchiveView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        panelVisible: true,
        selectedTasks: [],
      };
      this.handleOnChange = this.handleOnChange.bind(this);
      this.restoreTasks = this.restoreTasks.bind(this);
    }

    handleOnChange(name,value) {
        //alert("NAME " + name + " value " + value[0].tasktitle)
        //const val = value
        //const n = name
        this.setState({ [name] : value })
    }
    restoreTasks(e){
      //e.preventDefault();
      console.log(this.state.selectedTasks[0].tasktitle);
      for (var i = 0; i < this.state.selectedTasks.length; i++) {
        console.log("Tasks to archive: " + this.state.selectedTasks[i].tasktitle + " " + this.state.selectedTasks[i].taskdescription)
  
        const updatedTask = {
          tasktitle: this.state.selectedTasks[i].tasktitle,
          taskdescription: this.state.selectedTasks[i].taskdescription,
          taskduedate: this.state.selectedTasks[i].taskduedate,
          tasksystem: this.state.selectedTasks[i].tasksystem,
          taskpriority: this.state.selectedTasks[i].taskpriority,
          taskanalys: this.state.selectedTasks[i].taskanalyst,
          taskcollaborator: this.state.selectedTasks[i].taskcollaborator,
          relatedtasks: this.state.selectedTasks[i].relatedtasks,
          //progress: this.state.selectedTasks[i].progress,
          archiveStatus: 0
        };
  
        // console.log("UPDATED TASK: " + updatedTask.tasktitle);
  
        axios
        .put(
          `http://localhost:4000/home/tasks/update/${this.state.selectedTasks[i]._id}`,
          updatedTask
        )
        .then((res) => console.log(res.data));
      }
      window.location.reload(false)
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
                  <button class="btn btn-primary" onClick={this.restoreTasks} handleOnChange={this.handleOnChange}>Restore</button>
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