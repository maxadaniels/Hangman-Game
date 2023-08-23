import React, { Component } from "react";
import fetchRandomWord from "../words";
import "./Hangman.css";

// Importing images for different hangman states
import state1 from "../images/state1.GIF";
import state2 from "../images/state2.GIF";
import state3 from "../images/state3.GIF";
import state4 from "../images/state4.GIF";
import state5 from "../images/state5.GIF";
import state6 from "../images/state6.GIF";
import state7 from "../images/state7.GIF";
import state8 from "../images/state8.GIF";
import state9 from "../images/state9.GIF";
import state10 from "../images/state10.gif";
import state11 from "../images/state11.GIF";

class Hangman extends Component {
   // Default properties for the Hangman component
  static defaultProps = {
    maxWrong: 10,
    images: [
      state1,
      state2,
      state3,
      state4,
      state5,
      state6,
      state7,
      state8,
      state9,
      state10,
      state11
    ]
  };

  constructor(props) {
    super(props);

    // Initial state of the component
    this.state = {
      nWrong: 0,          // Number of wrong guesses
      guessed: new Set(), // Set to keep track of guessed letters
      answer: ""          // The word to guess
    };

    // Binding methods to the current instance
    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);

    // Fetch a random word when the component is constructed
    fetchRandomWord().then(word => {
      this.setState({
        answer: word
      });
    });
  }

  // Method to reset the game state
  resetGame() {
    this.setState({
      nWrong: 0,
      guessed: new Set()
    });

    // Fetch a new random word for the next game
    fetchRandomWord().then(word => {
      this.setState({
        answer: word
      });
    });
  }

  // Method to generate an array representing the guessed word
  guessedWord() {
    const { answer, guessed } = this.state;

    return answer.split("").map(ltr => (guessed.has(ltr) ? ltr : "_"));
  }

  // Method to handle user guesses
  handleGuess(evt) {
    let ltr = evt.target.value;

    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  // Method to generate letter buttons
  generateButtons() {
    const { handleGuess } = this;
    const { guessed } = this.state;

    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
      <button
        key={index}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  render() {
    const { nWrong, answer } = this.state;
    const { images, maxWrong } = this.props;

    let alternateText = `${this.state.nWrong} wrong guesses`;

    return (
      <div className="Hangman">
        {/* Reset button */}
        <button id="reset" onClick={this.resetGame}>
          Reset Game
        </button>
        {/* Image representing hangman state */}
        <img src={images[nWrong]} alt={alternateText} />
        <p>Number Wrong: {nWrong}</p>

        {/* Conditional rendering based on game state */}
        {answer === this.guessedWord().join("") ? (
          <p>You WIN! You guessed "{answer} " correctly!!!</p>
        ) : nWrong === maxWrong ? (
          <div>
            <p>YOU LOSE</p>
            <p>Correct Word is: {answer}</p>
          </div>
        ) : (
          <div>
            <p className="Hangman-word">{this.guessedWord()}</p>
            <p className="Hangman-btns">{this.generateButtons()}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Hangman;