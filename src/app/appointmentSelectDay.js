var React = require('react');
var moment = require('moment');
var firebase = require("firebase");
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
    var localLocale = moment().locale('fi');


    var d = new Date();
    var n = d.getDay();

    // console.log(d)
    console.log(n)

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

var day = localLocale.add(startDay + 1, 'day').format('L');
days.push(day)
    for (var i = 1; i < 8; i++) {
      var day = localLocale.add(1, 'day').format('L');
      days.push(day);
    }

      var firstWeek = localLocale.isoWeek() - 1;
      var listId = 0;

         return { showElementMonday: true,
                  week: firstWeek,
                  day: days,
                  startDay:startDay,
                  id:listId
          };
     },

     addWeek: function(){

       var clearWeekArray = this.state.day;
       clearWeekArray = [];
       var nextWeek = this.state.day;
       var newStartDay = this.state.startDay + 7;
       var days = [];

       for (var i = 1; i < 8; i++) {
         var localLocale = moment().locale('fi');
         var nextWeek = localLocale.add(newStartDay + i, 'day').format('L');

         days.push(nextWeek);
       }

        var newWeek = this.state.week;

       if (newWeek === 52){
        newWeek = this.state.week - 51;
       }
       else {
         var newWeek = this.state.week + 1;
       }
       this.setState({
         week: newWeek,
         day:days,
         startDay: newStartDay
       })

     },
       backWeek: function(){

         var clearWeekArray = this.state.day;
         clearWeekArray = [];
         var backWeek = this.state.day;
         var reduceStartDay = this.state.startDay - 7;
          var days = [];
          var localLocale = moment().locale('fi');
          var backWeek = localLocale.add(reduceStartDay + 1, 'day').format('L');
          days.push(backWeek);
          for (var i = 1; i < 8; i++) {
            var backWeek = localLocale.add(1, 'day').format('L');
            days.push(backWeek);
          }

          var newWeek = this.state.week;

         if (newWeek === 1){
          newWeek = this.state.week + 51;
         }
         else {
           var newWeek = this.state.week - 1;
         }
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
                  <li className="monday" onClick={this.showElementMonday} onClick={this.day} ><p>Ma</p><p>{this.state.day[0]}</p></li>
                  <li className="tuesday" onClick={this.showElementTuesday} onClick={this.day}><p>Ti</p><p>{this.state.day[1]}</p></li>
                  <li className="wednesday" onClick={this.showElementTuesday} onClick={this.day}><p>Ke</p><p>{this.state.day[2]} </p></li>
                  <li className="thursday" onClick={this.showElementTuesday} onClick={this.day}><p>To</p><p>{this.state.day[3]}</p></li>
                  <li className="friday" onClick={this.showElementTuesday} onClick={this.day}><p>Pe</p><p>{this.state.day[4]}</p></li>
                  <li className="saturday"><p>La</p><p>{this.state.day[5]}</p></li>
                  <li className="sunday"><p>Su</p><p>{this.state.day[6]}</p></li>
                </ul>
                <div className="freeTimes-container">
                    { this.state.showElementMonday ? <MondayComponent showElementMonday={this.showElementMonday} mondayTimes={this.mondayTimes} continueToForm={this.continueToForm} /> : null}
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
  mondayTimes: function(time) {
    this.props.treatmentTimes(time);
  },
  day: function(e) {
    var times = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '12:00-12:00', '13:00-13:30'];
    var currentTarget = $(e.target).text();
    var currentLiElement = $(e.currentTarget);
    var dateToFirebase = currentTarget.replace(/\./g,'');
    var dateAndTime = [];
    var firebaseRef = firebase.database().ref();
    var firebaseRefGetTest = firebase.database().ref().child('customer/date/' + dateToFirebase);
    var i = 0;
    $('li').removeClass('active-day')
    currentLiElement.addClass('active-day')
     $('.ma').show()
     $('.ti').show()
     $('.ke').show()
     $('.to').show()
     $('.pe').show()

              firebaseRefGetTest.on("child_added", snap => {
                var time = snap.child('time').val();

                if (time === '10:00-10:30') {
                    $('.ma').hide();
                }
                if (time === '10:30-11:00') {
                    $('.ti').hide();
                }
                if (time === '11:00-11:30') {
                    $('.ke').hide();
                }
                if (time === '11:30-12:00') {
                    $('.to').hide();
                }
                if (time === '12:00-12:30') {
                    $('.pe').hide();
                }

              })

// setTimeout(function(){
//
//  var t = [];
//   if (t[0] === 'ei löydy kannasta!'){
//
//
// }; }, 5000);

    this.props.treatmentTimes(currentTarget);

  },
  showElementMonday: function(t) {
      this.setState({ showElementMonday: true });
      this.setState({ showElementTuesday: false });



  },
  showElementTuesday: function() {
      this.setState({ showElementTuesday: true,
                     showElementMonday: false });
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
