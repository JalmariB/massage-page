var React = require('React');
import{Link} from 'react-router';
var Header = React.createClass({
  render: function(){
    return (
      <div className="header-container">
        <h1>HINNASTO</h1>
      </div>
    );
  }
});
module.exports = Header;
