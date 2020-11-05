import React from 'react'
import { GroupMenuItem, MenuItem } from '../../components/SideBar'

const Menu = (
  <GroupMenuItem title="Home" icon="home" to="/home">
    <MenuItem title="Home" to="/home/Analyst" />
    <MenuItem title="Event" to="/home/event" />
    <MenuItem title="System" to="/home/systems" />
    <MenuItem title="Tasks" to="/home/tasks" />
    <MenuItem title="Subtasks" to="/home/subtasks" />
    <MenuItem title="Findings" to="/home/findings" />
    <MenuItem title="Archive" to="/home/archive " />
    <MenuItem title="Progress View" to ="/home/ProgressView"/>
  </GroupMenuItem>
)

export default Menu
