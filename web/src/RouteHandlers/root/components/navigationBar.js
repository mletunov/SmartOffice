import React, { Component } from 'react';
import NavLink from "../../../components/navLink";

class NavigationBar extends Component {
    render() {
        return (
            <div className="btn-group-vertical left-nav-block" role="group" >
                <NavLink path="/home" textCode={"home_nav"} />
                <NavLink path="/devices" textCode={"devices_nav"} />
            </div>
        );
    }
}

export default NavigationBar;
