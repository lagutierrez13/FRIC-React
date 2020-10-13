import React from 'react'
import { Route } from 'react-router'
import Dashboard from './dashboard-1/Dashboard'
import SystemDetailedView from './System/SystemDeatiledView.js'
import HomeMenu from './Menu'

export default [
    /*<Route path="/configuration/dashboard-1" component={Dashboard} />,*/
    
    /**
     * this is where each of the pages will be routed, the "component" is the type of view
     */
    <Route path="/home/archive" component={Dashboard} />, 
    <Route path="/home/event" component={Dashboard} />,
    <Route path="/home/findings" component={Dashboard} />,
    <Route path="/home/subtasks" component={Dashboard} />,
    <Route path="/home/tasks" component={Dashboard} />,
    <Route path="/home/systems" component={SystemDetailedView} />
  ]
export { HomeMenu }
