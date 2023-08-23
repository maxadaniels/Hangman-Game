import React from 'react';
import "./Help.css"

const Help = () => {
  return (
    <div className="help-container">
      <h2>Hangman Game Rules</h2>
      <p>
        Hangman is a word guessing game. The objective is to guess the secret
        word by suggesting letters within a certain number of incorrect guesses.
      </p>
      <p>
        Each incorrect guess results in a part of a "hangman" being drawn. The
        game is lost if the full hangman is drawn before the word is guessed.
      </p>
      <p>
        You have a limited number of guesses. If you guess all the correct
        letters before running out of guesses, you win!
      </p>
    </div>
  );
};

export default Help;