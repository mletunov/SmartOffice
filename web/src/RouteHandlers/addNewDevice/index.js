import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import store from "../../store";
import AddDeviceForm from "./components/addDeviceForm";


class AddNewDevice extends Component {

   constructor() {
       super();
   }

    render() {
        return (
          <AddDeviceForm/>
        );
    }
}

export default AddNewDevice;
