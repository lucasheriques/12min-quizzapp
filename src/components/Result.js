import React from 'react';

function Result(props) {
  return (
    <div className="begin">
      <p>Acabou! Agora, vamos aos <span class="green">resultados!</span> :)</p>

      <p>A sua <span className="purple">velocidade de leitura</span> é medida pelo número de palavras lidas por minuto.
        Ou seja, se você leu <span class="purple">300 palavras em um minuto</span>, isso lhe daria uma velocidade de
        300ppm (palavras por minuto)!
      </p>

      <p>No seu caso, você leu <span className="purple">{props.wordCount} palavras em {props.timeElapsed}</span>, lhe
        dando uma velocidade de <span className="purple">{Math.floor(props.speedResult)} palavras por minuto!</span></p>

      <p>Já o seu <span className="green">nível de compreensão</span> é medido pela porcentagem de perguntas que você
        acertou no Quiz. Ou seja, se ele possui dez perguntas, cada acerto equivale a 10%!</p>

      <p>No seu caso, você acertou <span className="green">{props.rightAnswers} das {props.answersTotal} perguntas
      </span>, lhe rendendo uma taxa de compreensão de <span className="green">{props.quizResult}%</span>!
      </p>
    </div>
  );
}

Result.propTypes = {
  speedResult: React.PropTypes.string.isRequired,
  timeElapsed: React.PropTypes.string.isRequired,
  wordCount: React.PropTypes.number.isRequired,
  quizResult: React.PropTypes.string.isRequired,
  answersTotal: React.PropTypes.number.isRequired,
  rightAnswers: React.PropTypes.number.isRequired

};

export default Result;
