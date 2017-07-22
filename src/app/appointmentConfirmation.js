var React = require('react');

import {Router, Route, browserHistory, Link} from 'react-router';

var NavComponent = require('./nav')
var AppointmentHeader = require('./appointmentHeader')
var FooterComponent = require('./footer')

var AppointmentConfirmation = React.createClass ({

  render: function(){

    return (
      <div >
            <div className="appointment-confirmation-container">
                  <h2>TARKISTA TIEDOT</h2>
                  <ul className="customer-details">
                      <li><p><strong>Hieronta:</strong> </p><p id="customerTreatment"></p></li>
                      <li><p><strong>Ajankohta:</strong> </p><p id="customerDate"></p></li>
                      <li><p><strong>Aika:</strong> </p><p id="customerTime"></p></li>
                      <li><p><strong>Nimi:</strong> </p><p id="customerName"></p></li>
                      <li><p><strong>Sähköposti:</strong> </p><p id="customerEmail"></p></li>
                      <li><p><strong>Puhelinnumero:</strong> </p><p id="customerPhone"></p></li>
                  </ul>
                  <div className="buttons-container">
                    <button onClick={this.backToForm} className="secondary-button">Takaisin</button>
                    <button onClick={this.confirmOrder} className="primary-button">Vahvista hieronta</button>
                  </div>
            </div >

      </div>
          );

        },



backToForm: function() {
  this.props.clearCustomerInfo();
  this.props.newState(false, false, true, false);

},
confirmOrder: function() {
    this.props.sendToFireBase();
    this.props.newState(false, false, false, false, true);
},
getConfirmationDetails: function(){
    this.props.setCustomerInfo();

},

componentDidMount() {
  {this.getConfirmationDetails()}
}

      });

module.exports = AppointmentConfirmation;
