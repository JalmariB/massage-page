var React = require('React');
import{Link} from 'react-router';

var Form = React.createClass({
  render: function(){
    return (
      <div>
      <form id="customerForm" className="form-container" onSubmit={this.handleSubmit}>

      <label htmlFor="name">Name:</label>
        <input id="name" type="text" required ref="newName" />
      <label htmlFor="email">Sähköposti:</label>
        <input id="email"type="email" />
      <label htmlFor="phone">Puhelinnumero:</label>
        <input id="phone" type="tel" />
      <div className="buttons-container">
        <Link to={'/app/appointmentSelectDay'}><button className="secondary-button">Takaisin</button></Link>
        <input className="primary-button" type="submit" value="Jatka" />
      </div>
      </form>
      </div>

    );
  },
  //form handling function

  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.refs.newName);
  }
});

module.exports = Form;
