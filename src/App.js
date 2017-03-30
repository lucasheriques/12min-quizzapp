import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import QuizApp from './components/QuizApp';
import SpeedApp from './components/SpeedApp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>12min quiz - velocidade de leitura e nível de compreensão</h2>
          </div>


          <Link to="/read">Artigo</Link>
          <Link to="/quiz">Quiz</Link>

          <Route exact path="/read" component={SpeedApp} />
          <Route exact path="/quiz" component={QuizApp} />
        </div>
      </Router>
    );
  }
}

export default App;
