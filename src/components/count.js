import React from 'react';
import {connect} from 'react-redux';

export function Count(props) {

  const currentCount = props.guesses.length;

  return <span>Guesses so far: { currentCount } </span>

}

export const mapStateToProps = state => ({
  guesses: state.guesses,
  guess: state.guess,
  answer: state.answer
});

export default connect(mapStateToProps)(Count);
