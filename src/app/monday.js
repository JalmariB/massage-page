var React = require('React');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory, Link} from 'react-router';


var MondayComponent = React.createClass({

  render: function(){

    return (
      <div>
      <ul className="monday-times">
        <li>10:00-10:30</li>
        <li>10:30-11:00</li>
        <li>11:00-11:30</li>
        <li>12:00-12:00</li>
        <li>13:00-13:30</li>
      </ul>
      </div>
    );
  }
});

module.exports = MondayComponent;
