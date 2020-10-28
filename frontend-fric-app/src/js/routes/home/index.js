import React from "react";
import { Route } from "react-router";
import Dashboard from "./dashboard-1/Dashboard";
import HomeMenu from "./Menu";
/* File imports */
import AnalystProgressView from "./Analyst/AnalystProgressView";
import EventView from "./event/EventView";
import SystemView from "./System/SystemView.js";
import TaskView from "./Task/TaskView.js";
import SubtaskView from "./Subtask/SubtaskView";
import FindingView from "./finding/FindingView"


export default [
  /*<Route path="/configuration/dashboard-1" component={Dashboard} />,*/

  /**
   * this is where each of the pages will be routed, the "component" is the type of view
   */

  <Route path="/home/Analyst" component={AnalystProgressView} />,
  <Route path="/home/event" component={EventView} />,
  <Route path="/home/systems" component={SystemView} />,
  <Route path="/home/tasks" component={TaskView} />,
  <Route path="/home/subtasks" component={SubtaskView} />,
  <Route path="/home/findings" component={FindingView} />,
  <Route path="/home/archive" component={Dashboard} />,
];
export { HomeMenu };
