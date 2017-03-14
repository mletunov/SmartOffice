import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../store";
import "../assets/styles/index.scss"


class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className={"root-block"}>
                    <div>
                        Header
                    </div>
                    {this.props.children}
                </div>
            </Provider>
        );
    }
}

export default Root;
