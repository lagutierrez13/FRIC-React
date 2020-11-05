import React, { Component } from 'react'
import Home from './home'
import Forms from './forms';
import Extras from './extras'
import Configuration from './configuration';
import Event from './home/event'
import { Footer, Left, Top } from '../navigation';
import { Menu } from "./index"

class PageContent extends React.Component {
  render() {
    return (
      <div>
        <div className="container body">
          <div className="main_container">
            <Left>{Menu}</Left>
            <Top />
              <div className="right_col" role="main">
                { Forms }
                { Extras }
                { Home }
                { Configuration }
                { Event }
              </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
export default PageContent
