var React = require('React');
var ReactDOM = require('react-dom');

import{Link} from 'react-router';


var PointmentStepOne = React.createClass({

  render: function(){

    return (
      <div>
        <div className="appointment-container">
          <h2>VALITSE HIERONTA</h2>
          <ul>
            <li onClick={this.halfHour}><p>Hieronta 30min</p><p>30€</p></li>
            <li onClick={this.fortyFive}><p>Hieronta 45min</p><p>40€</p></li>
            <li onClick={this.hour}><p>Hieronta 60min</p><p>45€</p></li>
            <li onClick={this.hourHalf}><p>Hieronta 90min</p><p>55€</p></li>
          </ul>
        </div>
      </div>
    );
  },
halfHour: function(){
  this.props.newState(false, true, false, false);
  var halfHourTimes = {
    first: '10:00-10:30',
    second: '11:00-11:30',
    third:'12:00-12:30',
    fourth:'13:00-13:30',
    fifth:'14:00-14:30'
    // first: '10:00-10:30',
    // second: '10:30-11:00',
    // third:'11:00-11:30',
    // fourth:'11:30-12:00',
    // fifth:'12:00-12:30'
  }
  this.props.getTreatment('30 min', halfHourTimes.first, halfHourTimes.second, halfHourTimes.third, halfHourTimes.fourth, halfHourTimes.fifth );

},
fortyFive: function(){
  this.props.newState(false, true, false, false);

  var fortyFiveTimes = {
    first: '10:00-10:45',
    second: '11:00-11:45',
    third:'12:00-12:45',
    fourth:'13:00-13:45',
    fifth:'14:00-14:45'
  }
  this.props.getTreatment('45 min', fortyFiveTimes.first, fortyFiveTimes.second, fortyFiveTimes.third, fortyFiveTimes.fourth, fortyFiveTimes.fifth );

},
hour: function(){
  this.props.newState(false, true, false, false);

  var hourTimes = {
    first: '10:00-11:00',
    second: '11:00-12:00',
    third:'12:00-13:00',
    fourth:'13:00-14:00',
    fifth:'14:00-15:00',
  }
  this.props.getTreatment('60 min', hourTimes.first, hourTimes.second, hourTimes.third, hourTimes.fourth, hourTimes.fifth );
},

hourHalf: function(){
  this.props.newState(false, true, false, false);

  var hourHalfTimes = {
    first: '10:00-11:30',
    second: '12:00-13:30',
    third: '14:00-15:30'
  }
  this.props.getTreatment('90 min', hourHalfTimes.first, hourHalfTimes.second, hourHalfTimes.third);
  }

});


module.exports = PointmentStepOne;
