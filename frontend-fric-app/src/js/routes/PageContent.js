import React, { Component } from 'react'
import Home from './home'
import Forms from './forms';
import Extras from './extras'
import Configuration from './configuration';

class PageContent extends Component {
  render() {
    return (
      <div className="right_col" role="main">
        { Forms }
        { Extras }
        { Home }
        { Configuration }
      </div>
    )
  }
}

export default PageContent
