import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Root from './RouteHandlers/root'
import React from 'react'
import Home from "./RouteHandlers/home";
import AddNewDevices from "./RouteHandlers/addNewDevice";
import DeviceList from "./RouteHandlers/deviceList";

export default (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Root} >
            <IndexRedirect to = "home" />
            <Route path = "home" component = {Home} />
            <Route path = "devices">
              <IndexRedirect to = "list" />
              <Route path = "list" component = {DeviceList} />
              <Route path = "add" component = {AddNewDevices} />
            </Route>
            {/*<Route path = "*" component = {NotFoundPage} />*/}
        </Route>
    </Router>
)
