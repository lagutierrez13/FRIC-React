import React, { Component } from "react";
import axios from "axios";
import EditTaskModal from "./EditTaskModal";
import { ProgressBar } from "react-bootstrap";

const Task = (props) => (
  <tr>
    <td><input onChange={(e) => props.handleAddItem(e,props.task,"selectedTasks",props.handleOnChange) } type="checkbox" defaultChecked={false} /></td>
    <td>{props.task.tasktitle}</td>
    <td>{props.task.tasksystem}</td>
    <td>{props.task.taskanalyst}</td>
    <td>{props.task.priority}</td>
    <td>
      <ProgressBar striped variant="info" now={props.task.progress} />
    </td>
    <td>{props.task.no_of_subtasks}</td>
    <td>{props.task.no_of_findings}</td>
    <td>{props.task.due_date}</td>
    <td>
      <EditTaskModal task={props.task} />
    </td>
  </tr>
);

class TaskTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [], 
      displayArchive: props.displayArchive,
      selectedTasks: [] };

      this.handleAddItem = this.handleAddItem.bind(this)
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

  taskList(archive,handleAddItem, handleOnChange) {
    return this.state.tasks.map(function (currentTask, i) {
      //If this is the archive view, then display archived tasks
      if(archive){
        //display all archived tasks
        if(currentTask.archiveStatus){
          return <Task task={currentTask} handleAddItem={handleAddItem} handleOnChange={handleOnChange} key={i} />;
        }
      }
      else{
        if(!currentTask.archiveStatus){
          return <Task task={currentTask} key={i} />;
        }
      }
    });
  }
  //For adding task to selected tasks list through check box
  handleAddItem(e,item,n,handleOnChange){
    let items = [...this.state.selectedTasks]
    var ids = items.map(ele => ele.id);
    if(e.target.checked)
        items.push(item)
    else {
      var index = ids.indexOf(item.id);
      items.splice(index,1);
    }
    this.setState({selectedTasks : items});
    //name then value 
    handleOnChange(n,items)
  }

  render() {
    return (
      <div class="x_panel">
        <div class="x_title">
          <h2>Tasks Table</h2>

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
          <tbody>{this.taskList(this.state.displayArchive, this.handleAddItem, this.props.handleOnChange)}</tbody>
        </table>
      </div>
    );
  }
}

export default TaskTable;
