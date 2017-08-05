var React = require('React');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory, Link} from 'react-router';


var MondayComponent = React.createClass({
  getInitialState: function() {


    //  var times = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30'];


         return {

                  // mondayTimes: times,

          };
     },
  render: function(){

    return (
      <div>
      <ul className="monday-times">
        <li className="monday-times-first first-time"  onClick={this.getTimeMonday}>{this.props.blockTimes[0]}</li>
        <li className="monday-times-first second-time" onClick={this.getTimeMonday}>{this.props.blockTimes[1]}</li>
        <li className="monday-times-first third-time" onClick={this.getTimeMonday}>{this.props.blockTimes[2]}</li>
        <li className="monday-times-first fourth-time" onClick={this.getTimeMonday}>{this.props.blockTimes[3]}</li>
        <li className="monday-times-first fifth-time" onClick={this.getTimeMonday}>{this.props.blockTimes[4]}</li>
      </ul>
      </div>
    );

  },
  getTimeMonday: function(e) {
    var currentTarget = $(e.target).text();
    this.props.mondayTimes(currentTarget);
    this.props.continueToForm();
    this.props.showElementMonday(currentTarget);



  }
});

module.exports = MondayComponent;
