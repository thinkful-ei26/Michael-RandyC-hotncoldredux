import {SET_GUESS} from '../actions/actions';

const initialState = { 
    guesses : [],
    guess: '',
    answer: Math.floor(Math.random()* 100 + 1)
}

export const guessReducer = (state = initialState, action) => {
    if(action.type === SET_GUESS){
        return Object.assign({}, state, {
            guess: action.guess,
            guesses: [...state.guesses, action.guess]
        })
    }
    return state;
}

