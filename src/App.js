import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>12min quiz</h2>
        </div>
        <Question content="What was the microbook's sugestion to fixing anxiety?" />
      </div>
    );
  }
}

export default App;
