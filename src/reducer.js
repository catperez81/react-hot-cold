import {RESTART_GAME, MAKE_GUESS, SEE_INFO} from '../actions';

const initialState = {
	restart: false,
    guess: 10,
    info: false
};


export const quizReducer = (state=initialState, action) => {
	if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            restart: true
        });
    }
    else if (action.type === MAKE_GUESS) {
        return Object.assign({}, state, {
            guess: action.guess
        });
    }
    else if (action.type === SEE_INFO) {
        return Object.assign({}, state, {
            info: true
        });
    }
    return state;
    }
};
