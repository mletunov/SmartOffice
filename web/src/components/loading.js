import React, { Component } from 'react';
import { connect } from "react-redux"
import  { Link } from "react-router";
import { FormattedMessage } from 'react-intl';

class Loading extends Component {

    render() {
        return (
            <div className={this.props.inProgress ? "loading-block": null}>
              {
                this.props.inProgress ?
                <div className="spinner"/> : this.props.children
              }
            </div>
        );
    }
}

Loading.propTypes = {
  inProgress: React.PropTypes.bool
};

export default Loading;
