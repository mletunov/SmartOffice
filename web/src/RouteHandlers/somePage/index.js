import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../../store";
import  { Link } from "react-router";

import { DevicesApi } from "../../api";

import CommonTable from "../../components/commonTable";

class SomePage extends Component {

   constructor() {
       super();

       this.state = {
           devices: []
       }
   }

    componentDidMount() {
        DevicesApi.getAll()
            .then(response => {
                console.log("RESPONSE: ", response)
                this.setState({
                    devices: response
                });
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log(this.state);
        return (
          <CommonTable items={this.state.devices} />
        );
    }
}

export default SomePage;
