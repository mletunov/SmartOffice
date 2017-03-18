import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../../store";
import  { Link } from "react-router";

import { DevicesApi } from "../../api";

import CommonTable from "../../components/commonTable";
import Loading from "../../components/loading";

class SomePage extends Component {

   constructor() {
       super();

       this.state = {
           devices: [],
           loading: false
       }
   }

    componentDidMount() {
      this.setState({
          loading: true
      });
        DevicesApi.getAll()
            .then(response => {
                console.log("RESPONSE: ", response)
                this.setState({
                    devices: response,
                    loading: false
                });
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log(this.state);
        return (
          <Loading inProgress={this.state.loading}>
            <CommonTable items={this.state.devices} />
          </Loading>
        );
    }
}

export default SomePage;
