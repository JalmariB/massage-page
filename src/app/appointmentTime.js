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
  this.props.getTreatment('30 min');

},
fortyFive: function(){
  this.props.newState(false, true, false, false);
  this.props.getTreatment('45 min');

},
hour: function(){
  this.props.newState(false, true, false, false);
  this.props.getTreatment('60 min');

},
hourHalf: function(){
  this.props.newState(false, true, false, false);
  this.props.getTreatment('90 min');

}

});


module.exports = PointmentStepOne;
