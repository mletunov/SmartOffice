import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../../store";
import NavLink from "./components/navLink";

import "../../assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";

import NavigationBar from "../components/navigationBar";

class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="row header-block">
                        <div className="col-md-3 logo-block">Smart Office</div>
                        <div className="col-md-9 top-bar-block">
                            <div className="top-bar">

                              <button className="btn btn-default log-out-btn">Log Out</button>
                              <div className="btn-group btn-group-lg lang-block" role="group">
                                <button className="btn btn-default lng-btn">En</button>
                                <button className="btn btn-default lng-btn">Ru</button>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="row content-block">
                        <div className="col-md-3 side-panel-block">
                          <div className="side-panel">
                            <NavigationBar />
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
