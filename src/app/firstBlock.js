var React = require('React');
import{Link} from 'react-router';

var FirstBlockComponent = React.createClass({
  render: function(){
    return (
      <div>
        <div className="first-block image">
          <h2>URHEILUHIERONTAA</h2>
          <p>Varaa aika nopeasti ja kätevästi netin kautta.</p>
          <Link to={'/app/appointment'}><button className="primary-button">Ajanvaraukseen</button></Link>
        </div>
        <video autoPlay loop id="video-background" muted >
        <source src="img/video.mp4" type="video/mp4"></source>
        </video>
      </div>

    );
  }
});

module.exports = FirstBlockComponent;
