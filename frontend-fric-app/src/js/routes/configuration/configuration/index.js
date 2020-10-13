import React from 'react'
import { Route } from 'react-router'
import ConfigurationView from './ConfigurationView'
import Dashboard from './dashboard-1/Dashboard'

export default [
  <Route key="configuration-tables" path="/configuration/configuration" component={ConfigurationView} />,
]
export { ConfigurationView }