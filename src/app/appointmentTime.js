var React = require('React');
var ReactDOM = require('react-dom');

import{Link} from 'react-router';

var FooterComponent = require('./footer')
var NavComponent = require('./nav')
var AppointmentHeaderComponent = require('./appointmentHeader')

var PointmentStepOne = React.createClass({

  render: function(){

    return (
      <div>
        <NavComponent />
        <AppointmentHeaderComponent />
        <div className="time-block-container">
          <h2>VALITSE HIERONTA</h2>
          <ul>
            <Link to={'/app/appointmentSelectDay'}><li><p>Hieronta 30min</p><p>30€</p></li></Link>
            <li><p>Hieronta 45min</p><p>40€</p></li>
            <li><p>Hieronta 60min</p><p>45€</p></li>
            <li><p>Hieronta 90min</p><p>55€</p></li>
          </ul>
        </div>
        <FooterComponent />
      </div>
    );
  }
});


module.exports = PointmentStepOne;
