import React, { Component } from 'react';
import NavLink from "../RouteHandlers/root/components/navLink";

class NavigationBar extends Component {
    render() {
        return (
            <div className="btn-group-vertical left-nav-block" role="group" >
                <NavLink path="home" textCode={"home_nav"} />
                <NavLink path="somePage" textCode={"some_page_nav"} />
            </div>
        );
    }
}

export default NavigationBar;
