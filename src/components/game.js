import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import {restartGame, generateAuralUpdate, makeGuess} from '../actions';

export class Game extends React.Component {

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => props.dispatch(restartGame())}
          onGenerateAuralUpdate={() => props.dispatch(generateAuralUpdate())}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.props.dispatch(makeGuess(guess))}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }}

Game.defaultProps = {
  guesses: [],
  feedback: '',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const mapStateToProps = state => ({
    guess: state.guess,
    feedback: state.feedback,
    auralStatus: state.auralStatus,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);

