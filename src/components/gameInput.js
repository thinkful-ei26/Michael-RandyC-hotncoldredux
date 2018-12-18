import React from 'react';
import {setGuess} from '../actions/actions';
import {connect} from 'react-redux';
import './gameInput.css';

export function GameInput(props) {
    const onSubmit =  e => {
        e.preventDefault();
        const data = new FormData(e.target);
        return props.dispatch(setGuess(data.get('guess'))) ;
    }
    console.log(props.guesses);
    return <div className='guessBackground'><form onSubmit={onSubmit}>
    <label className='guess'>Input guess:</label>
    <input className='input' type="number" name="guess"  />
    <button className='guessButton' type="submit">Guess</button>
    </form>
    </div>
}

export const mapStateToProps = state => ({
    guesses: state.guesses,
    guess: state.guess,
    answer: state.answer
});

export default connect(mapStateToProps)(GameInput);