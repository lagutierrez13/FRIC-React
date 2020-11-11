import React from "react";
import { Route } from "react-router";
import ConfigurationMenu from "./Menu";
import ConfigurationView from "./configuration/ConfigurationView";
import HelpView from "./help/HelpView";

export default [
  <Route path="/home/configuration/configuration" component={ConfigurationView} />,
  <Route path="/home/configuration/help" component={HelpView} />,
];

export { ConfigurationMenu };
