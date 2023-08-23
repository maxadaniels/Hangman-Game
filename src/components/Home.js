import React from 'react';
import state11 from "../images/state11.GIF";

// Define a functional component named "Home"
const Home = () => {
  return (
    // The JSX code for the component's UI starts here
    <div className="home-container">
      <h2>Welcome to My Hangman Game</h2>
      <img src={state11} alt="Hangman Game" />
      <h2>Best of Luck :)</h2>
    </div>
    // The JSX code for the component's UI ends here
  );
};

// Export the Home component to make it available for other modules
export default Home;
