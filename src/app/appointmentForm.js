var React = require('React');

import {Router, Route, browserHistory, Link} from 'react-router';

var NavComponent = require('./nav');
var AppointmentHeader = require('./appointmentHeader');
var FooterComponent = require('./footer');
var Form = require('./form');

var AppointmentForm = React.createClass({
  getInitialState: function() {
         return {
            customerInfo: ['Testi']
          };
     },



  render: function(){

    return (
      <div>
      <NavComponent />
      <AppointmentHeader / >
      <div className="appointment-container">
        <h2>TÄYTÄ ASIKASTIETOSI</h2>
        <p>{this.state.customerInfo}</p>
        <Form />
      </div>
      <FooterComponent />
      </div>
    );
  },

});

module.exports = AppointmentForm;
