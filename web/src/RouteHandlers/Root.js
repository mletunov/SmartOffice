import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../store";
import "../assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";


class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="row header-block">
                        <div className="col-md-3 logo-block">Smart Office</div>
                        <div className="col-md-9 top-bar-block">
                            <div className="top-bar"></div>
                        </div>
                    </div>
                    <div className="row content-block">
                        <div className="col-md-3 side-panel-block">
                          <div className="side-panel">

                          </div>
                        </div>
                        <div className="col-md-9 children-column">
                            <div className="children-block">
                                {this.props.children}
                            </div>
                        </div>
                    </div>

                </div>
            </Provider>
        );
    }
}

export default Root;
