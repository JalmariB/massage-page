var React = require('react');


import {Router, Route, browserHistory, Link} from 'react-router';

var AppointmentHeader = require('./appointmentHeader')
var NavComponent = require('./nav')
var FooterComponent = require('./footer')
var MondayComponent = require('./monday')
var TuesdayComponent = require('./tuesday')
var AppointmentButtons = require('./appointmentButtons')

var AppointmentSelectDayComponent = React.createClass({
  getInitialState: function() {
         return { showElementMonday: true };
     },
     showElementMonday: function() {
         this.setState({ showElementMonday: true });
         this.setState({ showElementTuesday: false });
     },
     showElementTuesday: function() {
         this.setState({ showElementTuesday: true });
         this.setState({ showElementMonday: false });
     },

  render: function (){

    return(

      <div>
          <NavComponent/>
          <AppointmentHeader/>
            <div className="calendar-container">
            <h2>VALITSE AIKA</h2>
                <ul>
                  <li className="monday" onClick={this.showElementMonday}><p>Ma</p><p>12.12.2018</p></li>
                  <li className="tuesday" onClick={this.showElementTuesday}><p>Ti</p><p>13.12.2018</p></li>
                  <li className="wednesday"><p>Ke</p><p>14.12.2018</p></li>
                  <li className="thursday"><p>To</p><p>15.12.2018</p></li>
                  <li className="friday"><p>Pe</p><p>16.12.2018</p></li>
                </ul>
                <div className="freeTimes-container">
                    { this.state.showElementMonday ? <MondayComponent /> : null}
                    { this.state.showElementTuesday ? <TuesdayComponent /> : null }
                </div>
                <AppointmentButtons/>
              </div>
          <FooterComponent />
      </div>

    );

  }

});

module.exports = AppointmentSelectDayComponent;
