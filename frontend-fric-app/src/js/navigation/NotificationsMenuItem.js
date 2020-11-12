import React, { Component } from "react";
import { Item } from "../components/TopNavBar";
import axios from "axios";

const Subtask = (props) => (
  <tr>
    <td>{props.subtask.title}</td>
    <td>{props.subtask.duedate}</td>
  </tr>
);
const notification = (props, img, name, time, message) => ({
  img,
  name,
  time,
  message,
});
const notifications = (props) => [
  notification(
    "/images/img.jpg",
    props.subtasks.name,
    "3 mins ago",
    "Film festivals used to be do-or-die moments for movie makers. They were where..."
  ),
  notification(
    "/images/img.jpg",
    "Juan Lopez",
    "6 mins ago",
    "Film festivals used to be do-or-die moments for movie makers. They were where..."
  ),
  notification(
    "/images/img.jpg",
    "{name}",
    "10 mins ago",
    "Film festivals used to be do-or-die moments for movie makers. They were where..."
  ),
];

class NotificationsMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { subtasks: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/home/subtasks/get")
      .then((response) => {
        this.setState({ subtasks: response.data });
        console.log("SUBTASKS " + response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  subtaskList() {
    return this.state.subtasks.map(function (currentSubtask, i) {
      return <Subtask subtask={currentSubtask} key={i} />;
    });
  }

  notificationList() {
    return this.state.subtasks.map(function (currentSubtask, i) {
      return (
        <notification
          name={currentSubtask.title}
          time={currentSubtask.duedate}
          key={i}
        />
      );
    });
  }

  render() {
    return (
      <Item {...this.props}>
        <Item.Content className="info-number">
          <i className="fa fa-envelope-o"></i>
          <span className="badge bg-green">3</span>
        </Item.Content>
        <Item.SubMenu className="list-unstyled msg_list">
          {/* {this.notificationList().map((notification, index) => (
            <Notification key={index.toString()} {...notification} />
          ))} */}
          <li>
            <div className="text-center">
              <a onClick={(e) => console.log("all alerts")}>
                <strong>See All Notifications</strong>
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </li>
          <div class="x_panel">
            <div class="x_title">
              <h4>Subtasks Due Approaching</h4>

              <div class="clearfix"></div>
            </div>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>{this.subtaskList()}</tbody>
            </table>
          </div>
        </Item.SubMenu>
      </Item>
    );
  }
}

function Notification({ img, name, time, message }) {
  return (
    <li>
      <a>
        <span className="image">
          <img src={img} alt="Profile Pic" />
        </span>
        <span>
          <span>{name}</span>
          <span className="time">{time}</span>
        </span>
        <span className="message">{message}</span>
      </a>
      <input type="button" value="OK" className="btn btn-primary" />
    </li>
  );
}

export default NotificationsMenuItem;
