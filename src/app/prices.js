var React = require('react');
import{Link} from 'react-router';

var NavComponent = require('./nav')
var Header = require('./header')
var FooterComponent = require('./footer')



var Prices = React.createClass({
  getInitialState: function() {

         return {
            header: 'HINNASTO'

          };
     },
  render: function(){
    return (
      <div>
        <NavComponent/>
        <Header header={this.state.header}/>
        <div className="prices-container">
          <div className="treatment">
            <h3>30 MIN HOITO</h3>
            <p>Pienen alueen hierontahoito; esimerkiksi pään tai niskan akuuttiin
            lihaskipuun. Lihaksia rentouttava ja aineenvaihduntaa parantava lyhyt hoito
             nopeuttamaan rasituksesta palautumista.
             </p>
             <p><strong>30 €</strong></p>
          </div>

          <div className="treatment">
            <h3>45 MIN HOITO</h3>
            <p>Laajemman alueen hoito; esimerkiksi niska-hartiaseudun hieronta tai kevyt jalkojen käsittely. Rentouttava nautinto vähentämään jännityksiä ja kireyttä lihaksissa.
             </p>
             <p><strong>39 €</strong></p>
          </div>

          <div className="treatment">
            <h3>60 MIN HOITO</h3>
            <p>Isompi hoitoalue tai keskittyminen rajatulle alueelle. Sopiva aika pidempään rentoutumiseen kiireen keskellä ja vapautumiseen lihasjännityksistä. Soveltuu hyvin ensimmäiseksi käyntikerraksi.
             </p>
             <p><strong>49 €</strong></p>
          </div>

          <div className="treatment">
            <h3>90 MIN HOITO</h3>
            <p>Koko vartalon kevyt käsittely tai rajatun laajan-alueen perusteellinen hieronta. Pidempi rentoutumishetki, päiväunet. Parantaa verenkiertoa ja aineenvaihduntaa.
             </p>
             <p><strong>65 €</strong></p>
          </div>
        </div>
        <FooterComponent/>
      </div>
    );
  },
  componentDidMount() {

    if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        alert('attachEvent - resize');
    });
}
else if(window.addEventListener) {
  console.log('listen')

  $('.nav-item').css('color', 'black')
    window.addEventListener('resize', function() {
        console.log('addEventListener - resize');
        if($(window).width() > 750) {
          console.log('width', $(window).width() );
          $('.nav-item').css('color', 'black')
        }
        else {
          $('.nav-item').css('color', 'white')
        }
    }, true);
}


  }
});

module.exports = Prices;
