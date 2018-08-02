import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './component/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GAME - TIC TAC TOE</h1>
        </header>
        <p className="App-intro"></p>
        <div className="App-intro">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
