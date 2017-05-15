var React = require('react');

import{Link} from 'react-router';


var NavComponent = require('./nav');
var Header = require('./header');
var FooterComponent = require('./footer');


var Contact = React.createClass ({
  getInitialState: function() {

         return {
            header: 'YHTEYSTIEDOT'

          };
     },

  render: function(){
    return (
      <div>
          <NavComponent/>
           <Header header={this.state.header} />
              <div className="contact-container">
                  <div className="contact-information">
                    <p className="phone">050 6966680</p>
                    <p className="email">janne.berg@hierontaterapeutti.fi</p>
                    <p className="address">Aleksanterinkatu 29 B 33</p>
                  </div>
                  <div className="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.930948467768!2d24.941833716373836!3d60.16532198195916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc95c7f22a3%3A0x436ac3711d65c332!2sErottajankatu%2C+00130+Helsinki%2C+Suomi!5e0!3m2!1sfi!2sfi!4v1492843395589"></iframe>
                  </div>
              </div>
          <FooterComponent />
        </div>
    );
  },
  newHeaderState:function(){

  },

});
module.exports = Contact;
