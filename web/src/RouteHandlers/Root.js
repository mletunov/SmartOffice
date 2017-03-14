import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../store";


class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>
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