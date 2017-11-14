var React = require('react');
import {Router, Route, browserHistory, Link} from 'react-router';

var FirstBlockComponent = React.createClass({



  render: function(){
    return (
      <div>
        <div  className="first-block image">
          <div className="text-container">

            <h1>Muista pitää huolta</h1>
            <h1>kehostasi</h1>
            <p>Varaa aika urheiluhierontaan.</p>
            <Link to={'/app/appointment'}><button className="primary-button">Ajanvaraukseen</button></Link>
          
          </div>
        </div>
        <video autoPlay loop id="video-background"  >
        <source src="img/video.mp4" type="video/mp4" autoplay="false"></source>
        </video>
      </div>
    );
  },




});

module.exports = FirstBlockComponent;
