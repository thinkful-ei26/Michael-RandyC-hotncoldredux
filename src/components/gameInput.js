import React from 'react';
import {setGuess} from '../actions/actions';
import {connect} from 'react-redux';

export function GameInput(props) {
    const onSubmit =  e => {
        e.preventDefault();
        const data = new FormData(e.target);
        return props.dispatch(setGuess(data.get('guess'))) ;
    }
    console.log(props.guesses);
    return <form onSubmit={onSubmit}>
    <label>Input guess:</label>
    <input type="number" name="guess"  />
    <button type="submit">Guess</button>
    </form>
}

export const mapStateToProps = state => ({
    guesses: state.guesses,
    guess: state.guess,
    answer: state.answer
});

export default connect(mapStateToProps)(GameInput);