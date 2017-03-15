import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import React from 'react'
import Home from "./RouteHandlers/Home";
import SomePage from "./RouteHandlers/SomePage";

export default (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Root} >
            <IndexRedirect to = "home" />
            <Route path = "home" component = {Home} />
            <Route path = "somePage" component = {SomePage} />
            {/*<Route path = "*" component = {NotFoundPage} />*/}
        </Route>
    </Router>
)
