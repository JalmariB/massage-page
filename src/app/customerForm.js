var React = require('react');
import{Link} from 'react-router';
var FooterComponent = require('./footer')
var NavComponent = require('./nav')


var CustomerForm = React.createClass({

  getInitialState: function (){
    return {
      customerinfo: ['Nimi: ', 'Puhelinnumero: ', 'Sähköposti: ', 'Ajankohta: '],
      booking: ['Ajanvaraus']

    }
  },
  render: function (){

    return(
      <div>
        <NavComponent />
        <form className="customer-info">
            <h2 className="booking-title">{this.state.booking[0]}</h2>
            <div className="input-container">
              <label htmlFor="name">{this.state.customerinfo[0]}</label>
              <input type="text" id="name"></input>
            </div>
            <div className="input-container">
              <label htmlFor="phonenumber">{this.state.customerinfo[1]}</label>
              <input type="tel" id="phonenumber"></input>
            </div>
            <div className="input-container">
              <label htmlFor="email">{this.state.customerinfo[2]}  </label>
              <input type="email" id="email"></input>
            </div>
            <button className="primary-button">Jatka</button>
          </form>
          <FooterComponent />
      </div>
    );
  }
});

module.exports = CustomerForm;
