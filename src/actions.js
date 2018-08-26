export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = restart => ({
	type: RESTART_GAME,
	restart
});


export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess
});

export const SEE_FEEDBACK = 'SEE_FEEDBACK';
export const seeFeedback = feedback => ({
	type: SEE_FEEDBACK,
	guess
});


export const SEE_INFO = 'SEE_INFO';
export const seeInfo = info => ({
	type: SEE_INFO,
	info
});
