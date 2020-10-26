import React, { Component } from 'react'
import Home from './home'
import Forms from './forms';
import Extras from './extras'
import Configuration from './configuration';
import Event from './home/event'

class PageContent extends Component {
  render() {
    return (
      <div className="right_col" role="main">
        { Forms }
        { Extras }
        { Home }
        { Configuration }
        { Event }

      </div>
    )
  }
}

export default PageContent
