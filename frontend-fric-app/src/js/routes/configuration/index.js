import React from 'react'
import { Route } from 'react-router'
import ConfigurationMenu from './Menu'
import ConfigurationTables from './configuration/ConfigurationTables'

export default [
    <Route path="/configuration/configuration" component={ConfigurationTables} />
  ]

export { ConfigurationMenu }
