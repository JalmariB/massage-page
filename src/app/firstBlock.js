var React = require('React');
import{Link} from 'react-router';

var FirstBlockComponent = React.createClass({
  render: function(){
    return (
      <div>
        <div className="first-block image">
          <h2>URHEILUHIERONTAA</h2>
          <p>Varaa aika nopeasti ja kätevästi netin kautta.</p>
          <Link to={'/app/appointmentTime'}><button className="primary-button">Ajanvaraukseen</button></Link>
        </div>
      </div>

    );
  }
});

module.exports = FirstBlockComponent;
