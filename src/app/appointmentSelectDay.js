var React = require('react');

var moment = require('moment');
import {Router, Route, browserHistory, Link} from 'react-router';

var AppointmentHeader = require('./appointmentHeader')
var NavComponent = require('./nav')
var FooterComponent = require('./footer')
var MondayComponent = require('./monday')
var TuesdayComponent = require('./tuesday')
var AppointmentButtons = require('./appointmentButtons')

var AppointmentSelectDayComponent = React.createClass({
  getInitialState: function() {


    var days = [];
    var startDay;
    var d = new Date();
    var n = d.getDay();

    if (n === 0){
      startDay = -7;
    }
    if (n === 6){
      startDay = -6;
    }
    if (n === 5){
      startDay = -5;
    }
    if (n === 4){
      startDay = -4;
    }
    if (n === 3){
      startDay = -3;
    }
    if (n === 2){
      startDay = -2;
    }
    if (n === 1){
      startDay = -1;
    }

    for (var i = 1; i < 8; i++) {
      var day = moment().add(startDay + i, 'day').format('L');
      days.push(day);
    }
      var firstWeek = 20;

         return { showElementMonday: true,
                  week: firstWeek,
                  day: days,
                  startDay:startDay
          };
     },
     showElementMonday: function() {
         this.setState({ showElementMonday: true });
         this.setState({ showElementTuesday: false });
     },
     showElementTuesday: function() {
         this.setState({ showElementTuesday: true,
                        showElementMonday: false });
     },
     addWeek: function(){

       var clearWeekArray = this.state.day;
       clearWeekArray = [];
       var nextWeek = this.state.day;
       var newStartDay = this.state.startDay + 7;
      console.log(newStartDay)
       var days = [];

       for (var i = 1; i < 8; i++) {
         var nextWeek = moment().add(newStartDay + i, 'day').format('L');
         days.push(nextWeek);
       }

       var newWeek = this.state.week + 1;
       this.setState({
         week: newWeek,
         day:days,
         startDay: newStartDay
       })
       console.log(this.state.day)
     },
       backWeek: function(){

         var clearWeekArray = this.state.day;
         clearWeekArray = [];
         var backWeek = this.state.day;
         var reduceStartDay = this.state.startDay - 7;
         console.log(reduceStartDay)
          var days = [];

          for (var i = 1; i < 8; i++) {
            var backWeek = moment().add(reduceStartDay + i, 'day').format('L');
            days.push(backWeek);
          }

         var newWeek = this.state.week - 1;
         this.setState({
           week: newWeek,
           day:days,
           startDay: reduceStartDay

         })
     },


  render: function (){

    return(
      <div>
            <div className="calendar-container">
            <h2>VALITSE AIKA</h2>
            <div><p>Viikko</p><i onClick={this.backWeek} className="fa fa-chevron-left"></i><p className="week"> {this.state.week}</p><i onClick={this.addWeek} className="fa fa-chevron-right"></i></div>
                <ul>
                  <li className="monday" onClick={this.showElementMonday}><p>Ma</p><p>{this.state.day[0]}</p></li>
                  <li className="tuesday" onClick={this.showElementTuesday}><p>Ti</p><p>{this.state.day[1]}</p></li>
                  <li className="wednesday"><p>Ke</p><p>{this.state.day[2]}</p></li>
                  <li className="thursday"><p>To</p><p>{this.state.day[3]}</p></li>
                  <li className="friday"><p>Pe</p><p>{this.state.day[4]}</p></li>
                  <li className="saturday"><p>La</p><p>{this.state.day[5]}</p></li>
                  <li className="sunday"><p>Su</p><p>{this.state.day[6]}</p></li>
                </ul>
                <div className="freeTimes-container">
                    { this.state.showElementMonday ? <MondayComponent /> : null}
                    { this.state.showElementTuesday ? <TuesdayComponent /> : null }
                </div>
                <div className="buttons-container">
                  <button onClick={this.backToAppointmentTime} className="secondary-button">Takaisin</button>
                  <button onClick={this.continueToForm} className="primary-button">Jatka</button>
                </div>
              </div>
      </div>
    );
  },
  backToAppointmentTime: function(){
    this.props.newState(true, false, false);
    this.props.clearTreatment();
  },
  continueToForm: function(){
    this.props.newState(false, false, true)
  },
});

module.exports = AppointmentSelectDayComponent;
