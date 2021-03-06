import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import quizQuestions from '../api/quizQuestions';
import update from 'react-addons-update';

class QuizApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        true: 0,
        false: 0
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });

  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While it has elements to shuffle
    while (0 !== currentIndex) {

      // Pick a element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap with current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;

    return Math.round(answersCount["true"] / quizQuestions.length * 100).toString();
  }

  setResults(result) {
    this.setState({result: result});
  }

  renderQuiz() {
    return (
      <div>
        <p className="intro">O propósito desse desse quiz é medir a <span className="green">compreensão que você teve do texto
    </span>, e então compará-la com a sua <span className="purple">velocidade de leitura</span>.</p>
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }

  renderResult() {
    return (
      <Result
        speedResult={this.props.speed}
        timeElapsed={this.props.timeElapsed}
        wordCount={this.props.wordCount}
        quizResult={this.state.result}
        answersTotal={quizQuestions.length}
        rightAnswers={this.state.answersCount["true"]}
      />
    );
  }

  render() {
    return (
      <div className="Quiz">
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default QuizApp;
