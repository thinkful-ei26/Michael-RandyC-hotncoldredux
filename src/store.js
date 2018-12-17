import {createStore} from 'redux';

import {guessReducer} from './reducers/reducers';

export default createStore(guessReducer);