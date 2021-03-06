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

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generalAuralUpdate = () => ({
	type: GENERATE_AURAL_UPDATE
});


// export const SEE_INFO = 'SEE_INFO';
// export const seeInfo = info => ({
// 	type: SEE_INFO,
// 	info
// });
