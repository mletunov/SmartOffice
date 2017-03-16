import React, { Component } from 'react';
import NavLink from "../../../components/navLink";

class NavigationBar extends Component {
    render() {
        return (
            <div className="btn-group-vertical left-nav-block" role="group" >
                <NavLink path="home" text={"Home"} />
                <NavLink path="somePage" text={"Some Page"} />
            </div>
        );
    }
}

export default NavigationBar;