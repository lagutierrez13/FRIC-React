import React, { Component } from "react";
import PageContent from "./PageContent";
import SideBar from "../components/SideBar";
import { HomeMenu } from "./home";
import { ConfigurationMenu } from "./configuration";

export const Menu = (
  <SideBar>
    <SideBar.MenuSection title="General">
      {HomeMenu}
      {ConfigurationMenu}
    </SideBar.MenuSection>
  </SideBar>
);

export default PageContent;
