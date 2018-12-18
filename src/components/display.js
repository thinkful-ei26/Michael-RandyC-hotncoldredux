import React from 'react';
import {connect} from 'react-redux';
import './display.css'; 

export function Display(props) {
    const checkGuess = function guessChecker() {

        if(props.guess === props.answer){

            return 'You got it!!'
        }

        const diff = Math.abs(Number(props.guess) - Number(props.answer));
        console.log(props.answer);       
        if(diff <= 50 && diff > 40){
            return 'way off';
        }
        if(diff <= 40 && diff > 30){
            return 'pretty far off';
        }
        if(diff <= 30 && diff > 20){
            return 'getting closer';
        }
        if(diff <= 20 && diff > 10){
            return 'even closer';
        }
        if(diff <= 10 && diff > 0){
            return 'Very hot';
        }
        
        return 'Make a guess';
    }
    
    const displayMessage = checkGuess();  

    
    return <React.Fragment >
        <div className='displayMessage'>
        <span className='display'>{displayMessage}</span>
        <br></br>
        </div>
        </React.Fragment>
}

export const mapStateToProps = state => ({
    guesses: state.guesses,
    guess: state.guess,
    answer: state.answer
});

export default connect(mapStateToProps)(Display);