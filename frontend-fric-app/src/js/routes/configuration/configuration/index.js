import React from 'react'
import { Route } from 'react-router'
import ConfigurationTables from './ConfigurationTables'
import Dashboard from './dashboard-1/Dashboard'

export default [
  <Route key="configuration-tables" path="/configuration/configuration" component={ConfigurationTables} />,
]
export { ConfigurationTables }