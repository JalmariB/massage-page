var React = require('React');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory, Link} from 'react-router';


var TuesdayComponent = React.createClass({

  render: function(){

    return (
      <div>
      <ul className="tuesday-times">
        <li>10:00</li>
        <li>10:30</li>
        <li>11:00</li>
        <li>10:30</li>
        <li>12:00</li>
        <li>12:30</li>
      </ul>
      </div>
    );
  }
});

module.exports = TuesdayComponent
