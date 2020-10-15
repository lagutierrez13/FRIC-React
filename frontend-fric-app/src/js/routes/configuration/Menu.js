import React from "react";
import { GroupMenuItem, MenuItem } from "../../components/SideBar";

const Menu = (
  <GroupMenuItem title="Configuration" icon="gear" to="/configuration">
    <MenuItem title="Configuration" to="/configuration/configuration" />
    {/* <MenuItem title="Setup" to="/configuration/setup" /> */}
    <MenuItem title="Help" to="/configuration/help" />
  </GroupMenuItem>
);

export default Menu;
