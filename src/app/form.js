var React = require('react');

import {Router, Route, browserHistory, Link} from 'react-router';

var Form = React.createClass({
  render: function(){
    return (
      <div>

      <form id="customerForm" className="form-container" onSubmit={this.handleSubmit}>

      <label htmlFor="name">Nimi:</label>
        <input id="name" type="text" required ref="newName" />
      <label htmlFor="email">Sähköposti:</label>
        <input id="email"type="email" required ref="newEmail"/>
      <label htmlFor="phone">Puhelinnumero:</label>
        <input id="phone" type="tel" required ref="newPhonenumber"/>
      <div className="buttons-container">
        <Link to={'/app/appointmentSelectDay'}><button className="secondary-button">Takaisin</button></Link>

        <input className="primary-button" type="submit" value="Jatka"/>
      </div>
      </form>
      </div>
    );
  },
  //form handling function

  handleSubmit: function(e){
    e.preventDefault();
    this.props.onAdd(this.refs.newName.value, this.refs.newEmail.value, this.refs.newPhonenumber.value);
  }
});

module.exports = Form;
