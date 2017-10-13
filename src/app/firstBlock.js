var React = require('react');
import {Router, Route, browserHistory, Link} from 'react-router';

var FirstBlockComponent = React.createClass({



  render: function(){
    return (
      <div>
        <div  className="first-block image">
          <div className="text-container">
            <h1 >Urheiluhierontaa</h1>
            <p>Varaa aika nopeasti ja kätevästi netin kautta.</p>
            <Link to={'/app/appointment'}><button className="primary-button">Ajanvaraukseen</button></Link>
          </div>
        </div>
        <video autoPlay loop id="video-background" muted >
        <source src="img/video.mp4" type="video/mp4"></source>
        </video>
      </div>
    );
  },




});

module.exports = FirstBlockComponent;
