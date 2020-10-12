import React from 'react'
import { GroupMenuItem, MenuItem } from '../../components/SideBar'

const Menu = (
  <GroupMenuItem title="Home" icon="home" to="/home">
    <MenuItem title="Event" to="/home/event" />
    <MenuItem title="System" to="/home/systems" />
    <MenuItem title="Tasks" to="/home/tasks" />
    <MenuItem title="Subtasks" to="/home/subtasks" />
    <MenuItem title="Findings" to="/home/findings" />
    <MenuItem title="Archive" to="/home/archive " />
  </GroupMenuItem>
)

export default Menu