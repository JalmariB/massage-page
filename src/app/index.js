
var React = require('react');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory, Link} from 'react-router';


//Module requires
var NavComponent = require('./nav')
var FooterComponent = require('./footer')
var FirstBlockComponent = require('./firstBlock')
var SecondBlockComponent = require('./secondBlock')
var CustomerForm = require('./customerForm');
var AppointmentTimeComponent = require('./appointmentTime');
var AppointmentHeader = require('./appointmentHeader')
var AppointmentSelectDayComponent = require('./appointmentSelectDay')

var App = React.createClass ({

  render: function (){
    return(
        <Router history={browserHistory}>
          <Route path={'/app'} component={MainComponent}></Route>
          <Route path={'/app/appointmentTime'} component={AppointmentTimeComponent}></Route>
          <Route path={'/app/appointmentSelectDay'} component={AppointmentSelectDayComponent}></Route>
        </Router>
      );
  }
});

// Start
var MainComponent = React.createClass ({

  render: function (){
    return(
        <div>
          <NavComponent/>
          <FirstBlockComponent/>
          <SecondBlockComponent/>
          <FooterComponent/>
        </div>
      );
  }
});

ReactDOM.render(<App />, document.getElementById('app-container'));
