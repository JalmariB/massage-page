var React = require('React');

import {Router, Route, browserHistory, Link} from 'react-router';

var NavComponent = require('./nav');
var AppointmentHeader = require('./appointmentHeader');
var FooterComponent = require('./footer');
var Form = require('./form');

var AppointmentForm = React.createClass({

  render: function(){

    return (
      <div>
      <NavComponent />
      <AppointmentHeader / >
      <div className="appointment-container">
        <h2>TÄYTÄ ASIKASTIETOSI</h2>
        <Form />
      </div>
      <FooterComponent />
      </div>
    );
  },
  
});

module.exports = AppointmentForm;
