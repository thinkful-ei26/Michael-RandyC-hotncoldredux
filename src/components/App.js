import React, { Component } from 'react';
import './App.css';
import Display from './display';
import Header from './header';
import GameInput from './gameInput';
import NewGame from './newGame';
import Count from './count';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <GameInput />
      <Display />
      <Count />
      <NewGame />
      </React.Fragment>
    );
  }
}

export default App;
