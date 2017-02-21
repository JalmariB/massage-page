

var React = require('react');
var ReactDOM = require('react-dom');

//create component
var CustomerForm = React.createClass({

getInitialState: function (){
  return {
    customerinfo: ['Nimi: ', 'Puhelinnumero: ', 'Sähköposti: ', 'Ajankohta: '],
    booking: ['Ajanvaraus']

  }
},


  render: function (){

    return(

      <div>
            <form className="customer-info">
              <h2 className="booking-title">{this.state.booking[0]}</h2>
                <div className="input-container">
                  <label htmlFor="name">{this.state.customerinfo[0]}</label>
                  <input type="text" id="name"></input>
                </div>
                <div className="input-container">
                  <label htmlFor="phonenumber">{this.state.customerinfo[1]}</label>
                  <input type="tel" id="phonenumber"></input>
                </div>
                <div className="input-container">
                  <label htmlFor="email">{this.state.customerinfo[2]}  </label>
                  <input type="email" id="email"></input>
                </div>
            </form>
            <button className="primary-button">Jatka</button>
      </div>


    );
  }
});



ReactDOM.render(<CustomerForm  />, document.getElementById('form-container'));









//**********header Component************
function toggleClassNav (){
  console.log('The link was clicked.');
  var menu = document.querySelector('#header-container') // Using a class instead, see note below.
menu.classList.toggle('hamburger-in');
}
var NavComponent = React.createClass({




  // $('.hamburger-menu').click(function() {
  //      $('#header-container').toggleClass('hamburger-in')
  // });
getInitialState: function (){
  return {
    navNames: ['Ajanvaraus', 'Hinnasto', 'Janne Berg', 'Yhteystiedot'],


  }
},


  render: function (){

    var navNames = this.state.navNames;
    navNames = navNames.map(function(item, index){
          return (
            <NavTitlesComponent item={item} key={index}/>
          )
    });

    return(

      <div>
        <div onClick={toggleClassNav} className=" hamburger-icon "><i className="fa fa-bars"></i></div>
        <div>{navNames}</div>

      </div>


    );
  }
});

//create NestedComponent
var NavTitlesComponent = React.createClass({




  render: function(){


    return (

        // <li>
        //   <div className="nav-item">
        //       <span className="item-name">{this.props.item}</span>
        //   </div>
        // </li>
        <li className="nav-item">
              <a href="" className="item-name">{this.props.item}</a>
        </li>
    );
  }
})

ReactDOM.render(<NavComponent  />, document.getElementById('header-container'));
