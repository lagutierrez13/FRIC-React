import React from 'react'
import { Route } from 'react-router'
import ConfigurationView from './ConfigurationView'

export default [
  <Route key="configuration-tables" path="/configuration/configuration" component={ConfigurationView} />,
]
export { ConfigurationView }