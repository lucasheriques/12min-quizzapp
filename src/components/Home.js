import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="begin">
        <h2>Hey!</h2>
        <p>Você veio aqui para descobrir <a href="http://marketingdeconteudo.com/quem-e-neil-patel/" target="_blank">
          #QuemENeilPatel</a>?</p>

        <p>Se sim, me desculpe, mas você está no lugar errado :(</p>

        <p>O propósito deste aplicativo é tentar medir a sua <span
          className="green">performance</span> na <span className="purple">leitura</span>.
        </p>

        <p>Uma leitura mais rápida, se feita corretamente, pode lhe proporcionar uma maior <span
          className="purple">retenção da informação</span> da mesma forma que acelera o seu <span
          className="green">aprendizado</span>.</p>

        <p>Se você tem interesse em saber <span className="green">como está a sua leitura está agora</span>, basta
          clique no botão abaixo para começarmos!</p><br />

        <Link to="/read" className="btn">QUERO TESTAR MINHA LEITURA!</Link>
      </div>
    )
      ;
  }
}

export default Home;
