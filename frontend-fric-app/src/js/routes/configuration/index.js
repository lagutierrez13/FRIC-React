import React from 'react'
import { Route } from 'react-router'
import Dashboard from './dashboard-1/Dashboard'
import ConfigurationMenu from './Menu'

export default [
    /*<Route path="/configuration/dashboard-1" component={Dashboard} />,*/
    
    /**
     * this is where each of the pages will be routed, the "component" is the type of view
     */
    <Route path="/configuration/configuration" component={Dashboard} />, 
    <Route path="/configuration/setup" component={Dashboard} />,
    <Route path="/configuration/help" component={Dashboard} />
  ]

export { ConfigurationMenu }
