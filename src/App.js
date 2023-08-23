import React from 'react';
import Header from './components/Header';
import Hangman from './components/Hangman';
import Footer from './components/Footer';
import Help from './components/Help';
import Home from './components/Home';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import { Routes, Route } from "react-router-dom";

// Define the main App component
function App() {
  return (
    // The JSX code for the main App component's UI starts here
    <div className="App">
      {/* Include the Header component */}
      <Header />
      {/* Set up routes using React Router */}
      <Routes>
        {/* Define routes and their corresponding components */}
        <Route path="/" element={<Home />} />
        <Route path="/new-game" element={<Hangman />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Include the Footer component */}
      <Footer />
    </div>
    // The JSX code for the main App component's UI ends here
  );
}

// Export the App component to make it available for rendering
export default App;
