import React, { Component } from 'react';
import { connect } from "react-redux"
import { Provider } from "react-redux";
import FRC from 'formsy-react-components';
import Loading from "../../../components/loading";
import { browserHistory } from 'react-router';
import { DevicesApi } from "../../../api";
const { Input } = FRC;


class AddDeviceForm extends Component {

  state = {
      canSubmit: false,
      loading: false
  }

   constructor(props) {
       super(props);
   }

    onSubmit(data){
      this.setState({
          loading: true
      });

      let newDevice = {
        name: data.name,
        mac: data.mac,
        sensors: [],
        actuators: []
      }
      DevicesApi.register(newDevice)
          .then(response => {

              browserHistory.push("/devices/list")
          }).catch(error => {
              console.log(error);
          })
    }

    enableButton(){
      this.setState({
        canSubmit: true
      });
    }
    disableButton() {
      this.setState({
        canSubmit: false
      });
    }

    render() {
        return (
          <Loading inProgress={this.state.loading}>
            <div className="add-device-block">
              <FRC.Form
               onSubmit={this.onSubmit.bind(this)}
               onValid={this.enableButton.bind(this)}
               onInvalid={this.disableButton.bind(this)}
               ref={(form) => { this.myform = form; }}>

               <Input
                  name="name"
                  value=""
                  label={this.context.intl.formatMessage({id:"device_name", defaultMessage: "Device name"})}
                  type="text"
                  placeholder={this.context.intl.formatMessage({id:"device_name_plh", defaultMessage: "Enter device name here"})}
                  required />

                <Input
                   name="mac"
                   value=""
                   label={this.context.intl.formatMessage({id:"device_mac", defaultMessage: "MAC address"})}
                   type="text"
                   placeholder={this.context.intl.formatMessage({id:"device_mac_plh", defaultMessage: "Enter device MAC here"})}
                   required />

                <input className="btn btn-primary add-device-btn" disabled={!this.state.canSubmit}  type="submit" defaultValue={this.context.intl.formatMessage({id:"add_device_button", defaultMessage: "Add device"})} />
               </FRC.Form>
            </div>
        </Loading>
        );
    }
}

AddDeviceForm.contextTypes ={
 intl:React.PropTypes.object.isRequired
}

export default AddDeviceForm;
