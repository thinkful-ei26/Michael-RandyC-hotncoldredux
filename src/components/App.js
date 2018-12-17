import React, { Component } from 'react';
import './App.css';
import Display from './display';
import Header from './header';
import GameInput from './gameInput';
import NewGame from './newGame';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <GameInput />
      <Display />
      <NewGame />
      </React.Fragment>
    );
  }
}

export default App;
