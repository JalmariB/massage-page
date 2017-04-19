
var React = require('react');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory, Link} from 'react-router';


//Module requires
var NavComponent = require('./nav')
var FooterComponent = require('./footer')
var FirstBlockComponent = require('./firstBlock')
var SecondBlockComponent = require('./secondBlock')
var Appointment = require('./appointment');
var Prices = require('./prices');



var App = React.createClass ({
  getInitialState: function() {
         return {
            customerInfo: ['Testi']
          };
     },

  render: function (){
    return(
        <Router history={browserHistory}>
          <Route path={'/app'} component={MainComponent}></Route>
          <Route path={'/app/appointment'} component={Appointment}></Route>
          <Route path={'/app/prices'} component={Prices}></Route>
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
