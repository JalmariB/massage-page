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
            halfHourTimes: ['10:00-10:30', '11:00-11:30', '12:00-12:30', '13:00-13:30', '14:00-14:30'],
            fortyFiveTimes: ['10:00-10:45', '11:00-11:45', '12:00-12:45', '13:00-13:45', '14:00-14:45'],
            hourTimes: ['10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00'],
            hourHalfTimes: ['10:00-11:30', '12:00-13:30', '14:00-15:30'],
            testi: 2,
            blockTimes: []
          };
     },

  render: function(){

    return (

      <div>
        <NavComponent />
        <AppointmentHeaderComponent />
        { this.state.componentTime ? <AppointmentTime  newState={this.newState} getTreatment={this.getTreatment} /> : null}
        { this.state.componentSelectDay ? <AppointmentSelectDay blockTimes={this.state.blockTimes} treatmentDate={this.treatmentDate} treatmentTimes={this.treatmentTimes} newState={this.newState} clearTreatment={this.clearTreatment} /> : null}
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


getTreatment:function(treatment, time1, time2, time3, time4, time5){
  // console.log('lista  ')
    var updatedCustomerInfo = this.state.customerInfo;
    var updatedBlockTimes = this.state.blockTimes;
    updatedCustomerInfo.push(treatment);
    updatedBlockTimes.push(time1, time2, time3, time4, time5)
    this.setState({
      customerInfo: updatedCustomerInfo,
      blockTimes: updatedBlockTimes
    })
    // console.log(this.state.blockTimes)
},
  clearTreatment: function(){
    this.setState({
      customerInfo: [],
      blockTimes: []
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
    var customerInfoDeleteIndex = setTreatmentTimes.indexOf(1);

    // if (setTreatmentTimes.length === 3) {
    //   console.log('> 1')
    //   setTreatmentTimes.splice(1, 1);
    // }

    this.setState ({
        customerInfo: setTreatmentTimes
    })

  },
  treatmentDate: function(date) {
    var setTreatmentDate = this.state.customerInfo;
    setTreatmentDate.push(date);
    if (setTreatmentDate.length === 3) {
      setTreatmentDate.splice(1, 1);
    }
    console.log(this.state.customerInfo)
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
