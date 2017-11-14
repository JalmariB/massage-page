import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Link} from 'react-router';
import * as firebase from 'firebase';

//Module requires
var NavComponent = require('./nav')
var FooterComponent = require('./footer')
var FirstBlockComponent = require('./firstBlock')
var SecondBlockComponent = require('./secondBlock')
var Appointment = require('./appointment');
var Prices = require('./prices');
var Contact = require('./contact');

var config = {
      apiKey: "AIzaSyC3XtqarJdp2GXyffnLktQ9Una3z18fW8Y",
      authDomain: "project-massage.firebaseapp.com",
      databaseURL: "https://project-massage.firebaseio.com",
      projectId: "project-massage",
      storageBucket: "project-massage.appspot.com",
      messagingSenderId: "67926839920"
    };

     firebase.initializeApp(config);


class App extends React.Component {


  render(){
    return(
        <Router history={browserHistory}>
          <Route path={'/app'} component={MainComponent}></Route>
          <Route path={'/app/appointment'} component={Appointment}></Route>
          <Route path={'/app/prices'} component={Prices}></Route>
          <Route path={'/app/contact'} component={Contact}></Route>
        </Router>
      );
  }

};

// Start
class MainComponent extends React.Component {

  render(){
    return(
        <div>
          <NavComponent />
          <FirstBlockComponent/>
          <SecondBlockComponent/>
          <FooterComponent/>
        </div>
      );
  }

  componentDidMount() {
    window.addEventListener('scroll', function() {
      if(window.pageYOffset > 10) {

        $('.nav-block').addClass('scrolled-nav')
        $('.hexagon').addClass('scrolled-hexagon')
      }
      else {
        $('.nav-block').removeClass('scrolled-nav')
        $('.hexagon').removeClass('scrolled-hexagon')
      }
    });
    $('.nav-item').css('color', 'white')
    if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        alert('attachEvent - resize');
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function() {
        if($(window).width() > 750) {
          $('.nav-item').css('color', 'white')
        }
        else {
          $('.nav-item').css('color', 'white')
        }
    }, true);
}

  }
}

ReactDOM.render(<App />, document.getElementById('app-container'));
