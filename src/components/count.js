import React from 'react';
import {connect} from 'react-redux';
import './count.css';

export function Count(props) {

  const currentCount = props.guesses.length;
  const listGuesses = props.guesses.map((guess,index) => {
    return <li key={index}>{guess} </li>
  })

  return <React.Fragment>
    
      <span className='count'>Guesses so far: { currentCount } </span>
      <br></br>
      <ul className='listGuesses'>{listGuesses}</ul>
    </React.Fragment>

}

export const mapStateToProps = state => ({
  guesses: state.guesses,
  guess: state.guess,
  answer: state.answer
});

export default connect(mapStateToProps)(Count);
