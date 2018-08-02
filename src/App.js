import React, { Component } from 'react';
import './App.css';
import Game from './component/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">TIC TAC TOE</p>
        <div className="App-intro">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
