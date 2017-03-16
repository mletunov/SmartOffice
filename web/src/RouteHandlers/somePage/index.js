import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../../store";
import  { Link } from "react-router";

import { DevicesApi } from "../api";

class SomePage extends Component {

   constructor() {
       super();

       this.state = {
           devices: []
       }
   }

    componentDidMount() {
        console.log("DID MOUNT");
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
            <div>
                Spider Man!
                {
                    JSON.stringify(this.state.devices || [])
                }
            </div>
        );
    }
}

export default SomePage;
