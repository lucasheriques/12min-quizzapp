import React, {Component} from 'react';
import articles from '../api/Articles';
import Timer from '../components/Timer';
import QuizApp from './QuizApp';

class SpeedApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      content: '',
      word_count: 0,
      totalTime: '',
      buttonText: '',
      finished: '',
      speed: 0
    };

    this.onDropdownSelected = this.onDropdownSelected.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.renderText = this.renderText.bind(this);
  }


  createSelectItems() {
    let items = [];
    for (let i = 0; i < articles.length; i++) {
      items.push(<option value={i}>{articles[i].title}</option>);
    }
    return items;
  }

  onDropdownSelected(e) {
    this.setState({
      id: e.target.value,
      title: articles[e.target.value].title,
      content: 'Clique no botão abaixo para começar a leitura :)',
      word_count: articles[e.target.value].word_count,
      totalTime: 0,
      buttonText: 'Começar leitura',
      finished: 'no'
    });
    clearInterval(this.timerID);
  }

  renderText() {
    return (
      <Timer
        totalTime={this.formatSeconds(this.state.totalTime)}
        title={this.state.title}
        content={this.state.content}
        buttonText={this.state.buttonText}
        handleTimer={this.handleTimer}
      />
    )
  }

  handleTimer() {
    if (this.state.finished === 'finishing') {
      clearInterval(this.timerID);
      this.setState({
        content: '',
        finished: 'yes',
        speed: (this.state.word_count / this.state.totalTime * 60).toString()
      })
      ;
    } else {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      this.setState({
        content: articles[this.state.id].content,
        buttonText: 'Finalizar leitura e seguir para o Quiz',
        finished: 'finishing'
      });
    }
  }


  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      totalTime: this.state.totalTime + 1
    })
  }

  formatSeconds(totalSeconds) {
    if (this.state.totalTime === "")
      return;

    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }


  render() {
    return (
      <div>
        <select onChange={this.onDropdownSelected.bind(this)}>
          <option disabled selected>Selecione qual texto gostaria de usar para medir sua velocidade</option>
          {this.createSelectItems()}
        </select>

        {this.state.finished === "yes" ? <QuizApp
            speed={this.state.speed}
            timeElapsed={this.formatSeconds(this.state.totalTime)}
            wordCount={this.state.word_count}
          /> : this.renderText() }
      </div>
    );
  }
}

export default SpeedApp;
