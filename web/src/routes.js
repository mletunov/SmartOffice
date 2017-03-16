import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Root from './RouteHandlers/root'
import React from 'react'
import Home from "./RouteHandlers/home";
import SomePage from "./RouteHandlers/somePage";

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
