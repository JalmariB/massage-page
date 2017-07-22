var React = require('react');
import{Link} from 'react-router';

var NavComponent = React.createClass({

  render: function (){
    function toggleClassNav (){
      var menu = document.querySelector('#header-container')
      menu.classList.toggle('hamburger-in');
      $('.hexagon').toggleClass('hover-logo');
    }
    return(
      <div>
        <header id="header-container">
          <Link to={'/app/'}><div className="hexagon">B</div></Link>
          <div onClick={toggleClassNav} className=" hamburger-icon "><i className="fa fa-bars"></i></div>
          <div><NavTitlesComponent /></div>
        </header>
      </div>
    );
  }
});

//create NestedComponent
var NavTitlesComponent = React.createClass({
  getInitialState: function (){
    var homeIcon = '<i className="fa fa-home"></i>';
    return {
      navNames: ['Ajanvaraus', 'Hinnasto', 'Janne Berg', 'Yhteystiedot'],
    }
  },

  render: function(){
    return (
      <div>
        <Link className="item-name" to={'/app/appointment'}><li className="nav-item">
          {this.state.navNames[0]}
        </li></Link>
        <Link className="item-name" to={'/app/prices'}><li className="nav-item">
          {this.state.navNames[1]}
        </li></Link>
        <Link className="item-name" to={'/app/customerForm'}><li className="nav-item">
          {this.state.navNames[2]}
        </li></Link>
        <Link className="item-name" to={'/app/contact'}><li className="nav-item">
          {this.state.navNames[3]}
        </li></Link>
      </div>
    );
  }
});

module.exports = NavComponent;
