var React = require('React');


var FooterComponent = React.createClass({
  render: function(){
    return (
      <div>
        <footer>
          <div className="some-footer-container">
            <p className="fa fa-instagram"></p>
            <p className="fa fa-facebook"></p>
            <p className="fa fa-twitter"></p>
          </div>
          <div className="contact-footer-container">
            <p><span>Sähköposti:</span>hierontaterapeutti.janne.berg@gmail.com</p>
            <p><span>Puh:</span> 050 806 0600</p>
            <p><span>Osoite:</span> Töölö</p>
          </div>

          <p className="copyright">&#169; Janne Berg</p>
        </footer>
      </div>

    );
  }
});

module.exports = FooterComponent;
