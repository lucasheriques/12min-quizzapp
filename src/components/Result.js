import React from 'react';

function Result(props) {
  return (
    <div className="result">
      Sua compreensão foi de <strong>{props.quizResult}%</strong>. É necessário atingir constantemente uma compreensão
      de
      ao menos
      75% ou melhor para determinar sua verdadeira velocidade de leitura!
    </div>
  );
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired
};

export default Result;
