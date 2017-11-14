var React = require('react');

import {Router, Route, browserHistory, Link} from 'react-router';

var NavComponent = require('./nav')
var AppointmentHeader = require('./appointmentHeader')
var FooterComponent = require('./footer')

var AppointmentResult = React.createClass ({

  render: function(){

    return (
      <div >
            <div className="appointment-result-container">
                  <h2>Hierontasi on nyt varattu!</h2>
                  <p>Varaamasi hieronnan tiedot on lähetetty sähköpostiisi {this.props.customerInfo[4]}. Tervetuloa!</p>
                  <h2>Ajan peruutus</h2>
                  <p>Jos et pääse paikalle varattuna aikana, voit peruuttaa hieronnan soittamalla numeroon 050 806 0600</p>
                  <div className="buttons-container">
                    <Link to={'/app/'}><button className="secondary-button">Etusivulle</button></Link>
                  </div>
            </div >
      </div>
          );
        },

      });

module.exports = AppointmentResult;
