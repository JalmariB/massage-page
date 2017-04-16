var React = require('React');

import {Router, Route, browserHistory, Link} from 'react-router';

var AppointmentButtons = React.createClass({

  render: function(){

    return (

      <div className="buttons-container">
        <Link to={'/app/appointmentTime'}><button className="secondary-button">Takaisin</button></Link>
        <Link to={'/app/appointmentForm'}><button className="primary-button">Jatka</button></Link>
      </div>

    );
  }
});

module.exports = AppointmentButtons;
