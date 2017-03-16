import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../../store";
//import NavLink from "./components/navLink";

import "../../assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { FormattedMessage } from 'react-intl';

import NavigationBar from "../../components/navigationBar";

import { switchLanguage } from '../../intl/IntlActions';

class Root extends Component {
  debugger;
    render() {
        let self = this;
        const languageNodes = this.props.intl.enabledLanguages.map(
            lang => {
              let className = (lang === self.props.intl.locale) ? "btn-primary" : "btn-default";
              return <button key={lang} onClick={() => this.props.dispatch(switchLanguage(lang))} className={"btn lng-btn " + className}>{lang}</button>
            }
          );
        return (
                <div className="container">
                    <div className="row header-block">
                        <div className="col-md-3 logo-block">
                          <FormattedMessage id="app_title" />
                        </div>
                        <div className="col-md-9 top-bar-block">
                            <div className="top-bar">
                              <button className="btn btn-default log-out-btn">
                                <FormattedMessage id="logout" />
                              </button>
                              <div className="btn-group btn-group-lg lang-block" role="group">
                                {languageNodes}
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
        );
    }
}

function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(Root);
