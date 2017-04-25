var React = require('react');

import {Router, Route, browserHistory, Link} from 'react-router';

var NavComponent = require('./nav');
var AppointmentHeader = require('./appointmentHeader');
var FooterComponent = require('./footer');
var Form = require('./form');

var AppointmentForm = React.createClass({

  render: function(){

    return (
      <div>
      <div className="appointment-container">
          <h2>TÄYTÄ ASIAKASTIETOSI</h2>
          <form id="customerForm" className="form-container" onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name:</label>
                <input id="name" type="text" required ref="newName" />
              <label htmlFor="email">Sähköposti:</label>
                <input id="email"type="email" required ref="newEmail"/>
              <label htmlFor="phone">Puhelinnumero:</label>
                <input id="phone" type="tel" required ref="newPhonenumber"/>
              <div className="buttons-container">
                <button onClick={this.backToAppointmentSelectDay} className="secondary-button">Takaisin</button>
                <input className="primary-button" type="submit" value="Jatka" />
              </div>
          </form>
      </div>
      </div>
    );
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.formDetails(this.refs.newName.value, this.refs.newEmail.value, this.refs.newPhonenumber.value);
    this.props.newState(false, false, false, true);

  },
  backToAppointmentSelectDay: function(){
    this.props.clearCustomerInfo();
    this.props.newState(false, true, false, false);
  },

});

module.exports = AppointmentForm;
