import React, { Component } from "react";
import axios from "axios";
import EditTaskModal from "./EditTaskModal";
import { ProgressBar } from "react-bootstrap";



const Task = (props) => (
  <tr>
    <td>{props.task.tasktitle}</td>
    <td>{props.task.tasksystem}</td>
    <td>{props.task.taskanalyst}</td>
    <td>{props.task.priority}</td>
    <td><ProgressBar animated variant="info" now={props.task.progress}/></td>
    <td>{props.task.no_of_subtasks}</td>
    <td>{props.task.no_of_findings}</td>
    <td>{props.task.due_date}</td>
    <td>
      <EditTaskModal  task={props.task} />
    </td>
  </tr>
);

class TaskTable extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/home/tasks/get")
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  taskList() {
    return this.state.tasks.map(function (currentTask, i) {
      return <Task task={currentTask} key={i} />;
    });
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>Overall Tasks Table</h2>

          <div class="clearfix"></div>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>System</th>
              <th>Analyst</th>
              <th>Priority</th>
              <th>Progress</th>
              <th>No. of Subtasks</th>
              <th>No. of Findings</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>{this.taskList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TaskTable;
