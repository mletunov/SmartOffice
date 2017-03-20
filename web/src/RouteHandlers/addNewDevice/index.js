import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../../store";


class AddNewDevice extends Component {

   constructor() {
       super();
   }

    componentDidMount() {

    }

    render() {

        return (
          <div>
            "add device"
          </div>
        );
    }
}

export default AddNewDevice;
