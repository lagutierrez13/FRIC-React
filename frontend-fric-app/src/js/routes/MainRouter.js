import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import PageContent from './PageContent'
import LoginView from "./LoginView"


const MainRouter = () => {
    return (<div>
        <Switch>
            <Route path="/home" component={PageContent}/>
            <Route path="/login" component={LoginView}/>
        </Switch>
    </div>)
}

export default MainRouter