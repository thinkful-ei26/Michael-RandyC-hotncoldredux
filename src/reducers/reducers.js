import {SET_GUESS,SET_ANSWER} from '../actions/actions';
 
const initialState = { 
    gameMode : 1,
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

    if(action.type === SET_ANSWER){
        return Object.assign({}, state, {

            guess: '',
            guesses: [],
            answer: Math.floor(Math.random()* 100 + 1)

        })

    }


    return state;
}

