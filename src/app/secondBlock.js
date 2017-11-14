var React = require('React');


var SecondBlockComponent = React.createClass({
  render: function(){
    return (
      <div className="second-block">

          <h2>Urheiluhieroja Janne Berg</h2>
          <p>Valmistuin 2011 Turun Hieronta Akatemiasta Hierontaterapeutiksi.
          Tarjoan klassista hierontaa, sekä urheiluhierontaa. Toimin pääosin matkapöydän kanssa, joten asiakas voi kutsua minut paikan päälle hieromaan.
          Tarjoan myös palvelujani yrityksille. Hieronnat onnistuu myös omalta toimipisteeltäni.
          Palvelen laajoilla aukioloajoilla; arkisin jo aamu seitsemästä, ilta kymmeneen asti. </p>
          <p>Hieronta nopeuttaa palautumista liikuntasuorituksesta, vähentää kipuilua ja lihasjännitystä, sekä
          alentaa tehokkaasti stressiä rentouttaen kehoa ja mieltä.</p>
          <img src={'img/profile.png'} alt="boohoo" className="profile-image"/>

      </div>

    );
  }
});

module.exports = SecondBlockComponent;
