import {RESTART_GAME, MAKE_GUESS, GENERAL_AURAL_UPDATE} from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make a guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const quizReducer = (state=initialState, action) => {
	if (action.type === RESTART_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make a guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  else if (action.type === MAKE_GUESS) {
    // convert string to integer //
    let guess = parseInt(action.guess, 10);

    const difference = Math.abs(action.guess - state.correctAnswer);

    let feedback;

    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    return Object.assign({}, state, {
      feedback,
      guess: [...state.guesses, guess]
    });
  }

  else if (action.type === GENERAL_AURAL_UPDATE) {
    const { guesses, feedback } = state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    return Object.assign({}, state, {auralStatus});
  }

  return state;
};
