import React from 'react'
import { Route } from 'react-router'
import ConfigurationMenu from './Menu'
import ConfigurationView from './configuration/ConfigurationView'

export default [
    <Route path="/configuration/configuration" component={ConfigurationView} />
  ]

export { ConfigurationMenu }
