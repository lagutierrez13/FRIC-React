import React, { Component } from "react";
import { Item } from "../components/TopNavBar";
import Left from "./Left";
import {PageTitle} from "../components";


const notification = (img, name, name2, time, time2) => ({
  img,
  name,
  name2,
  time,
  time2
});

const notifications = [

  notification(
    "/images/alert.png",
    "Task:",
    "Subtask:",
    "Due Date:",
    "Due Date:",


  ),
  notification(
    "/images/alert.png",
    "Task:",
    "Subtask:",
    "Due Date:",
    "Due Date:"
  ),
  notification(
    "/images/alert.png",
    "Task:",
    "Subtask:",
    "Due Date:",
    "Due Date:",
  ),
  notification(
    "/images/alert.png",
    "Task",
    "Subtask:",
    "Due Date:",
    "Due Date:",

  ),
];

class NotificationsMenuItem extends Component {
  render() {

    return (
      <Item {...this.props}>
        <Item.Content className="info-number">
          <i className="fa fa-bell-o"></i>
          <span className="badge bg-red">3</span>
        </Item.Content>
        <Item.SubMenu className="list-unstyled msg_list">
          {notifications.map((notification, index) => (
            <Notification key={index.toString()} {...notification} />
          ))}
           <li>
            <div className="text-center">
              <a onClick={(e) => console.log("all notifications")}>
                <strong>See All Notifications</strong>
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </li>
        </Item.SubMenu>
      </Item>
    );
  }
}

function Notification({ img, name, name2, time, time2}) {
  return (


    <li>

      <a>
        <span className="image">
          <img src={img} alt="Profile Pic" />
        </span>

        <span>
          <span>{name}</span><br/>
          <span>{name2} </span>
          <span className="time">{time}</span>
           <span className="time">{time2}</span>
        </span>

      </a>

      <input type="button" value="OK" className="btn btn-group-justified"/>
    </li>
  );
}

export default NotificationsMenuItem;
