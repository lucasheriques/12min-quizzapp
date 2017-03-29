import React from 'react';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {
  return (
    <div className="quiz">
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

Quiz.propTypes = {
  answer: React.PropTypes.string.isRequired,
  answerOptions: React.PropTypes.array.isRequired,
  counter: React.PropTypes.array.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

function renderAnswerOptions(key) {
  return (
    <AnswerOption
      key={key.content}
      answerType={key.type}
      answerContent={key.content}
      answer={props.answer}
      questionId={props.questionId}
      onAnswerSelected={props.onAnswerSelected}
    />
  );
}

export default Quiz;