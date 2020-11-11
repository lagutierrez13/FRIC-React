import React from "react";
import { GroupMenuItem, MenuItem } from "../../components/SideBar";

const Menu = (
  <GroupMenuItem title="Configuration" icon="gear" to="/home/configuration">
    <MenuItem title="Configuration" to="/home/configuration/configuration" />
    <MenuItem title="Help" to="/home/configuration/help" />
  </GroupMenuItem>
);

export default Menu;
