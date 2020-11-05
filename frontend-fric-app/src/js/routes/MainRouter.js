import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import PageContent from './PageContent'
import LoginView from "./LoginView"
import CreateEvent from "./home/login/CreateEvent"



const MainRouter = () => {
    return (<div>
        <Switch>
            <Route path="/home" component={PageContent}/>
            <Route path="/" component={LoginView}/>
            <Route path="/createEvent" component={CreateEvent}/>

        </Switch>
    </div>)
}

export default MainRouter
