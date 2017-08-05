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

    // console.log(n)

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
      this.checkCurrentDay()
         return { showElementMonday: true,
                  week: firstWeek,
                  day: days,
                  startDay:startDay,
                  id:listId
          };
     },

     checkCurrentDay: function() {
       var localLocale = moment().locale('fi');
       var currentDay = localLocale.format('L');

       if ($('.monday').text() === 'Ma' + currentDay) {
         $('.monday').addClass('active-day')
       }
       if ($('.tuesday').text() === 'Ti' + currentDay) {
         $('.tuesday').addClass('active-day')

       }
       if ($('.wednesday').text() === 'Ke' + currentDay) {
         $('.wednesday').addClass('active-day')
       }
       if ($('.thursday').text() === 'To' + currentDay) {
         $('.thursday').addClass('active-day')
       }
       if ($('.friday').text() === 'Pe' + currentDay) {
         $('.friday').addClass('active-day')
       }
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
       var currentWeek = moment().isoWeek();
       if (newWeek <= currentWeek){
            $('.fa-chevron-left').css({
                                     opacity: 1,
                                     pointerEvents: "auto"
                                    })
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
         var timeBlocks = this.props.halfHourTimes; //???
         var currentWeek = moment().isoWeek();
         if (newWeek < currentWeek){
              $('.fa-chevron-left').css({
                                       opacity: 0.5,
                                       pointerEvents: "none"
                                      })
         }

         this.setState({
           week: newWeek,
           day:days,
           startDay: reduceStartDay

         })




     },


  render: function (){
      console.log(this.props.testiAjat)
    return(
      <div>
            <div className="calendar-container">
            <h2>VALITSE AIKA</h2>
            <div><p>Viikko</p><i onClick={this.backWeek} className="fa fa-chevron-left"></i><p className="week"> {this.state.week}</p><i onClick={this.addWeek} className="fa fa-chevron-right"></i></div>
                <ul className="days-container">
                  <li className="monday" onClick={this.showElementMonday} onClick={this.day} ><p>Ma</p><p>{this.state.day[0]}</p></li>
                  <li className="tuesday" onClick={this.showElementTuesday} onClick={this.day}><p>Ti</p><p>{this.state.day[1]}</p></li>
                  <li className="wednesday" onClick={this.showElementTuesday} onClick={this.day}><p>Ke</p><p>{this.state.day[2]} </p></li>
                  <li className="thursday" onClick={this.showElementTuesday} onClick={this.day}><p>To</p><p>{this.state.day[3]}</p></li>
                  <li className="friday" onClick={this.showElementTuesday} onClick={this.day}><p>Pe</p><p>{this.state.day[4]}</p></li>
                  <li className="saturday"><p>La</p><p>{this.state.day[5]}</p></li>
                  <li className="sunday"><p>Su</p><p>{this.state.day[6]}</p></li>
                </ul>
                <div className="freeTimes-container">
                    { this.state.showElementMonday ? <MondayComponent blockTimes={this.props.blockTimes} showElementMonday={this.showElementMonday} mondayTimes={this.mondayTimes} continueToForm={this.continueToForm} /> : null}
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
    // var times = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '12:00-12:00', '13:00-13:30'];
    var currentDateText = $(e.currentTarget).text();
    var currentLiElement = $(e.currentTarget);
    var dateToFirebase = currentDateText.replace(/\./g,'');
    var dateAndTime = [];
    var firebaseRef = firebase.database().ref();
    var firebaseRefGetDate = firebase.database().ref().child('customer/date/' + dateToFirebase);
    var i = 0;

    $('li').removeClass('active-day')
    currentLiElement.addClass('active-day')
    
     $('.monday-times-first').show()

              firebaseRefGetDate.on("child_added", snap => {
                var time = snap.child('time').val();
// console.log('päivämäärän ajat  ' + time)
                if (time === '10:00-10:30'){
                  console.log('if--30testi--- ' + firebaseRefGetDate + '   ' + time )
                  $('.first-time').hide()
                }
                if (time === '11:00-11:30'){

                  $('.second-time').hide()
                }
                if (time === '12:00-12:30'){

                  $('.third-time').hide()
                }
                if (time === '13:00-13:30'){

                  $('.fourth-time').hide()
                }
                if (time === '14:00-14:30'){

                  $('.fifth-time').hide()
                }



                if (time === '10:00-10:45'){
                  $('.first-time').hide()
                }
                if (time === '11:00-11:45'){

                  $('.second-time').hide()
                }
                if (time === '12:00-12:45'){

                  $('.third-time').hide()
                }
                if (time === '13:00-13:45'){

                  $('.fourth-time').hide()
                }
                if (time === '14:00-14:45'){

                  $('.fifth-time').hide()
                }





                if (time === '10:00-11:00'){
                  $('.first-time').hide()
                }
                if (time === '11:00-12:00'){

                  $('.second-time').hide()
                }
                if (time === '12:00-13:00'){

                  $('.third-time').hide()
                }
                if (time === '13:00-14:00'){

                  $('.fourth-time').hide()
                }
                if (time === '14:00-15:00'){

                  $('.fifth-time').hide()
                }


                // if (time === '12:00-12:30'){
                //   console.log('if--30testi--- ' + firebaseRefGetDate + '   ' + time )
                //   // $('.first-time').hide()
                // }
                // if (time === '12:00-12:45'){
                //   console.log('if--45testi--- ' + firebaseRefGetDate + '   ' + time )
                //   $('.first-time').hide()
                // }
                // if (time === '12:00-12:30'){
                //   console.log('if-- 30min --- ' + firebaseRefGetDate + '   ' + time )
                // }

                //
                // if (time === '10:00-10:30') {
                //     if ($('.first-time').text() === '10:00-10:30' ){
                //       $('.first-time').hide()
                //     }
                // }
                // if (time === '10:00-10:45') {
                //     if ($('.first-time').text() === '10:00-10:45'){
                //       $('.first-time').hide()
                //     }
                // }
                // if (time === '10:00-11:00') {
                //     if ($('.first-time').text() === '10:00-11:00'){
                //       $('.first-time').hide()
                //     }
                // }


                // if (time === '11:00-11:30' || time === '11:00-11:45' || time === '11:00-12:00') {
                //     if ($('.first-time').text() === '11:00-11:30' || $('.first-time').text() === '11:00-11:45' || $('.first-time').text() === '11:00-12:00' ){
                //       $('.second-time').hide()
                //     }
                // }
                // if (time === '12:00-12:30' || time === '12:00-12:45' || time === '12:00-13:00') {
                //     if ($('.first-time').text() === '12:00-12:30' || $('.first-time').text() === '12:00-12:45' || $('.first-time').text() === '12:00-13:00' ){
                //       $('.third-time').hide()
                //     }
                // }
                // if (time === '13:00-13:30' || time === '13:00-13:45' || time === '13:00-14:00') {
                //     if ($('.first-time').text() === '13:00-13:30' || $('.first-time').text() === '13:00-13:45' || $('.first-time').text() === '13:00-14:00' ){
                //       $('.fourth-time').hide()
                //     }
                // }
                // if (time === '14:00-14:30' || time === '14:00-14:45' || time === '14:00-15:00') {
                //     if ($('.first-time').text() === '14:00-14:30' || $('.first-time').text() === '14:00-14:45' || $('.first-time').text() === '14:00-15:00' ){
                //       $('.fifth-time').hide()
                //     }
                // }
                // if (time === '15:00-15:30' || time === '15:00-15:45' || time === '15:00-16:00') {
                //     if ($('.first-time').text() === '15:00-15:30' || $('.first-time').text() === '15:00-15:45' || $('.first-time').text() === '15:00-16:00' ){
                //       $('.first-time').hide()
                //     }
                // }
                // if (time === '10:00-10:45') {
                //     if ($('.first-time').text() === '10:00-10:45' ){
                //       $('.first-time').hide()
                //     }
                // }
                // if (time === '10:00-11:00') {
                //     if ($('.first-time').text() === '10:00-11:00' ){
                //       $('.first-time').hide()
                //     }
                // }
                // if (time === '10:00-11:30') {
                //     if ($('.first-time').text() === '10:00-11:00' ){
                //       $('.first-time').hide()
                //     }
                // }

                // if (time === '10:00-10:45') {
                //
                //       $('.first-time').hide()
                //       $('.second-time').hide()
                //
                // }
                //
                // if (time === '11:00-11:30') {
                //   if ($('.third-time').text() === '11:00-11:30'){
                //     $('.third-time').hide()
                //   }
                // }
                // if (time === '11:30-12:00') {
                //   if ($('.fifth-time').text() === '11:00-11:30'){
                //     $('.fourth-time').hide()
                //   }
                // }
                // if (time === '12:00-12:30') {
                //   if ($('.fifth-time').text() === '11:00-11:30'){
                //     $('.fifth-time').hide()
                //   }
                // }
              })

    // this.props.treatmentTimes(currentDateText);

        this.props.treatmentDate(currentDateText);

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
  componentDidMount() {
    this.checkCurrentDay()
  }
});

module.exports = AppointmentSelectDayComponent;
