import React from "react";
import { Route } from "react-router";
import ConfigurationMenu from "./Menu";
import ConfigurationView from "./configuration/ConfigurationView";
import HelpView from "./help/HelpView";

export default [
  <Route path="/configuration/configuration" component={ConfigurationView} />,
  <Route path="/configuration/help" component={HelpView} />,
];

export { ConfigurationMenu };
