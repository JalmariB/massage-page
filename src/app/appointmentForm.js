var React = require('React');

import {Router, Route, browserHistory, Link} from 'react-router';

var NavComponent = require('./nav');
var AppointmentHeader = require('./appointmentHeader');
var FooterComponent = require('./footer');
var Form = require('./form');

var AppointmentForm = React.createClass({
  getInitialState: function() {

         return {
            customerInfo: []
          };
          
     },



  render: function(){

    return (
      <div>
      <NavComponent />
      <AppointmentHeader / >
      <div className="appointment-container">
        <h2>TÄYTÄ ASIKASTIETOSI</h2>
        <Form onAdd={this.onAdd} />
      </div>
      <FooterComponent />
      </div>
    );
  },
  onAdd:function(name, email, phone){
    var updatedCustomerInfo = this.state.customerInfo;
    updatedCustomerInfo.push(name, email, phone);
    this.setState({
      customerInfo: updatedCustomerInfo
    })
    alert(updatedCustomerInfo)
  }
});

module.exports = AppointmentForm;
