var React = require('React');
import{Link} from 'react-router';

var NavComponent = require('./nav')
var Header = require('./header')
var FooterComponent = require('./footer')



var Prices = React.createClass({
  render: function(){
    return (
      <div>
        <NavComponent/>
        <Header/>
        <div className="prices-container">
          <h2>HIERONTAHOIDOT</h2>
          <div className="treatment">
            <h3>30 MIN</h3>
            <p>Pienen alueen hierontahoito; esimerkiksi pään tai niskan akuuttiin
            lihaskipuun. Lihaksia rentouttava ja aineenvaihduntaa parantava lyhyt hoito
             nopeuttamaan rasituksesta palautumista.
             </p>
             <p><strong>30 €</strong></p>
          </div>

          <div className="treatment">
            <h3>45 MIN</h3>
            <p>Laajemman alueen hoito; esimerkiksi niska-hartiaseudun hieronta tai kevyt jalkojen käsittely. Rentouttava nautinto vähentämään jännityksiä ja kireyttä lihaksissa.
             </p>
             <p><strong>39 €</strong></p>
          </div>

          <div className="treatment">
            <h3>60 MIN</h3>
            <p>Isompi hoitoalue tai keskittyminen rajatulle alueelle. Sopiva aika pidempään rentoutumiseen kiireen keskellä ja vapautumiseen lihasjännityksistä. Soveltuu hyvin ensimmäiseksi käyntikerraksi.
             </p>
             <p><strong>49 €</strong></p>
          </div>

          <div className="treatment">
            <h3>90 MIN</h3>
            <p>Koko vartalon kevyt käsittely tai rajatun laajan-alueen perusteellinen hieronta. Pidempi rentoutumishetki, päiväunet. Parantaa verenkiertoa ja aineenvaihduntaa.
             </p>
             <p><strong>65 €</strong></p>
          </div>
        </div>
        <FooterComponent/>
      </div>
    );
  },
});

module.exports = Prices;
