import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../../store";
import  { Link } from "react-router";
import { FormattedMessage } from 'react-intl';

import { DevicesApi } from "../../api";

import CommonTable from "../../components/commonTable";
import Loading from "../../components/loading";

class DeviceList extends Component {

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
          <div className="device-list-blck">
            <Loading inProgress={this.state.loading}>
              <CommonTable items={this.state.devices} />
            </Loading>
            <Link to={"/devices/add"} className="btn btn-primary add-button">
                <FormattedMessage id={"add_dev"} />
            </Link>
          </div>
        );
    }
}

export default DeviceList;
