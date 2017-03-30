import React, {Component} from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalSeconds: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      totalSeconds: this.state.totalSeconds + 1
    })
  }

  formatSeconds(totalSeconds) {
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
        {this.formatSeconds(this.state.totalSeconds)}
      </div>
    );
  }
}

export default Timer;
