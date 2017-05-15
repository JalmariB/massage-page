var React = require('react');

var ReactDOM = require('react-dom');
var moment = require('moment');
var firebase = require("firebase");
import{Link} from 'react-router';


var NavComponent = require('./nav')
var AppointmentTime = require('./appointmentTime')
var AppointmentHeaderComponent = require('./appointmentHeader')
var AppointmentSelectDay = require('./appointmentSelectDay')
var AppointmentForm = require('./appointmentForm')
var AppointmentConfirmation = require('./appointmentConfirmation')
var FooterComponent = require('./footer')
var Appointment = React.createClass({


  getInitialState: function() {

         return {
            customerInfo: [],
            componentTime: true,
            componentSelectDay: false,
            appointmentForm: false,
            appointmentConfirmation: false
          };
     },

  render: function(){

    console.log(this.state.week)
    return (

      <div>
        <NavComponent />
        <AppointmentHeaderComponent />
        { this.state.componentTime ? <AppointmentTime  newState={this.newState} getTreatment={this.getTreatment} /> : null}
        { this.state.componentSelectDay ? <AppointmentSelectDay newState={this.newState} clearTreatment={this.clearTreatment} /> : null}
        { this.state.appointmentForm ? <AppointmentForm newState={this.newState} formDetails={this.formDetails} clearCustomerInfo={this.clearCustomerInfo}/> : null}
        { this.state.appointmentConfirmation ? <AppointmentConfirmation sendToFireBase={this.sendToFireBase} setCustomerInfo={this.setCustomerInfo} newState={this.newState} clearCustomerInfo={this.clearCustomerInfo} /> : null}
        <FooterComponent />
      </div>
    );
  },

  newState: function(b, b2, b3, b4) {

      this.setState({
        componentTime:b,
        componentSelectDay:b2,
        appointmentForm: b3,
        appointmentConfirmation: b4

      })
      console.log(this.state.days);

  },
  setWeek: function(){

  },

getTreatment:function(treatment){
    var updatedCustomerInfo = this.state.customerInfo;
    updatedCustomerInfo.push(treatment);
    this.setState({
      customerInfo: updatedCustomerInfo
    })
},
  clearTreatment: function(){
    this.setState({
      customerInfo: []
    })
  },
  clearCustomerInfo: function(){
    var removedCustomerInfo = this.state.customerInfo;
    removedCustomerInfo.splice(1, 3)
    this.setState({
      customerInfo: removedCustomerInfo
    })

  },
  formDetails:function(name, email, phone){
    var updatedCustomerInfo = this.state.customerInfo;
    updatedCustomerInfo.push(name, email, phone);
    this.setState({
      customerInfo: updatedCustomerInfo
    })

  },
  setCustomerInfo: function(){
        document.getElementById("customerTreatment").innerHTML = this.state.customerInfo[0];
        document.getElementById("customerName").innerHTML = this.state.customerInfo[1];
        document.getElementById("customerEmail").innerHTML = this.state.customerInfo[2];
        document.getElementById("customerPhone").innerHTML = this.state.customerInfo[3];
  },
sendToFireBase: function(){

}
});


module.exports = Appointment;
