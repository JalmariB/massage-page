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
var AppointmentResult = require('./appointmentResult')
var FooterComponent = require('./footer')
var Appointment = React.createClass({


  getInitialState: function() {

         return {
            customerInfo: [],
            componentTime: true,
            componentSelectDay: false,
            appointmentForm: false,
            appointmentConfirmation: false,
            appointmentResult: false,
            testi: 2
          };
     },

  render: function(){

    return (

      <div>
        <NavComponent />
        <AppointmentHeaderComponent />
        { this.state.componentTime ? <AppointmentTime  newState={this.newState} getTreatment={this.getTreatment} /> : null}
        { this.state.componentSelectDay ? <AppointmentSelectDay treatmentTimes={this.treatmentTimes} newState={this.newState} clearTreatment={this.clearTreatment} /> : null}
        { this.state.appointmentForm ? <AppointmentForm newState={this.newState} formDetails={this.formDetails} clearCustomerInfo={this.clearCustomerInfo}/> : null}
        { this.state.appointmentConfirmation ? <AppointmentConfirmation sendToFireBase={this.sendToFireBase} setCustomerInfo={this.setCustomerInfo} newState={this.newState} clearCustomerInfo={this.clearCustomerInfo} /> : null}
        { this.state.appointmentResult ? <AppointmentResult customerInfo={this.state.customerInfo}  newState={this.newState} /> : null}
        <FooterComponent />
      </div>
    );
  },

  newState: function(b, b2, b3, b4, b5) {

      this.setState({
        componentTime:b,
        componentSelectDay:b2,
        appointmentForm: b3,
        appointmentConfirmation: b4,
        appointmentResult: b5

      })

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
  treatmentTimes: function(time) {
    var setTreatmentTimes = this.state.customerInfo;
    setTreatmentTimes.push(time);
    this.setState ({
        customerInfo: setTreatmentTimes
    })
  },
  treatmentDay: function(date) {
    var setTreatmentDate = this.state.customerInfo;
    setTreatmentDate.push(date);
    this.setState ({
        customerInfo: setTreatmentDate
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



    console.log(this.state.customerInfo)
        document.getElementById("customerTreatment").innerHTML = this.state.customerInfo[0];
        document.getElementById("customerDate").innerHTML = this.state.customerInfo[1];
        document.getElementById("customerTime").innerHTML = this.state.customerInfo[2];
        document.getElementById("customerName").innerHTML = this.state.customerInfo[3];
        document.getElementById("customerEmail").innerHTML = this.state.customerInfo[4];
        document.getElementById("customerPhone").innerHTML = this.state.customerInfo[5];

  },
sendToFireBase: function(){
  var dateToFirebase = this.state.customerInfo[1].replace(/\./g,'');
  var firebaseRef = firebase.database().ref();
  var customerInfoRef = firebaseRef.child('customer');
  var addDateRef = customerInfoRef.child('date');
  var addTimeRef = addDateRef.child(dateToFirebase);
    customerInfoRef.push({

      treatment: this.state.customerInfo[0],
      date: this.state.customerInfo[1] + this.state.customerInfo[2],
      time: this.state.customerInfo[2],
      name: this.state.customerInfo[3],
      email: this.state.customerInfo[4],
      phonenumber: this.state.customerInfo[5]
    });
    addDateRef.push({
      date: dateToFirebase
    });
    addTimeRef.push({
      time:this.state.customerInfo[2]
    });
}
});


module.exports = Appointment;
