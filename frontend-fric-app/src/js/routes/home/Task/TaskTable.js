import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Task = (props) => (
  <tr>
    <td>
      <input type="checkbox" type={props.Task.taskID}></input>
    </td>
    <td>{props.task.task_title}</td>
    <td>{props.task.system}</td>
    <td>{props.task.working_analyst}</td>
    <td>{props.task.priority}</td>
    <td>{props.task.task_progress}</td>
    <td>{props.task.no_of_subtasks}</td>
    <td>{props.task.no_of_findings}</td>
    <td>{props.task.due_date}</td>
    <td></td>
    <td>
      <Link to={"/update/" + props.task._id}>Edit</Link>
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
              <th></th>
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
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default TaskTable;
