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



var App = React.createClass ({

  render: function (){
    return(
        <Router history={browserHistory}>
          <Route path={'/app'} component={MainComponent}></Route>
          <Route path={'/app/appointment'} component={Appointment}></Route>
          <Route path={'/app/prices'} component={Prices}></Route>
          <Route path={'/app/contact'} component={Contact}></Route>
        </Router>
      );
  }
});

// Start
class MainComponent extends Component {


  constructor(){
    super();
    this.state= {
      speed:10
    };

  }
  componentDidMount() {

          const dbRefObject = firebase.database().ref('object');

       dbRefObject.on('value', snap => console.log(snap.val()));


  }

  render(){
    return(
        <div>
          <NavComponent/>
          <button onClick={this.sendToFireBase}>testi</button>
          <h1>{this.state.speed}</h1>
          <FirstBlockComponent/>
          <SecondBlockComponent/>
          <FooterComponent/>
        </div>
      );
  }
  sendToFireBase(){

  }

}




ReactDOM.render(<App />, document.getElementById('app-container'));
