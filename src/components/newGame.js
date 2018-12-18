import React from 'react';
import {setAnswer} from '../actions/actions';
import {connect} from 'react-redux';
import './newGame.css';

export function NewGame(props) {

    return <button className='newGame' onClick = {() => props.dispatch(setAnswer())}>New Game</button>
    
}

export const mapStateToProps = state => ({
    guesses: state.guesses,
    guess: state.guess,
    answer: state.answer
  });
  
export default connect(mapStateToProps)(NewGame);