var React = require('react');

import {Router, Route, browserHistory, Link} from 'react-router';

var NavComponent = require('./nav')
var AppointmentHeader = require('./appointmentHeader')
var FooterComponent = require('./footer')

var AppointmentConfirmation = React.createClass ({

  render: function(){

    return (
      <div>
        <NavComponent />
        <AppointmentHeader />
            <h2>lkj</h2>
        <FooterComponent />
      </div>
          );
        }
      });

module.exports = AppointmentConfirmation;
