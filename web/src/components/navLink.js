import React, { Component } from 'react';
import { connect } from "react-redux"
import  { Link } from "react-router";

class NavLink extends Component {

    render() {
        return (
            <Link to={this.props.path} className="btn btn-default" activeClassName="btn-primary">
                {this.props.text}
            </Link>
        );
    }
}

NavLink.propTypes = {
  path: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default NavLink;
