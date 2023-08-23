import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

// Define the Header component
const Header = () => {
  return (
    // The JSX code for the Header component's UI starts here
    <Navbar expand="lg" className="header">
      {/* Left-side navigation buttons */}
      <Nav className="header-buttons">
        {/* Use Link to create navigational links */}
        <Link to="/" className="nav-link">
          <Button variant="outline-light" className="header-button">
            Home
          </Button>
        </Link>
        <Link to="/new-game" className="nav-link">
          <Button variant="outline-primary" className="header-button">
            New Game
          </Button>
        </Link>
      </Nav>
      {/* Brand/logo */}
      <Navbar.Brand className="header-brand">Hangman</Navbar.Brand>
      {/* Right-side navigation buttons */}
      <Nav className="header-buttons">
        <Link to="/help" className="nav-link">
          <Button variant="outline-secondary" className="header-button">
            Help
          </Button>
        </Link>
        <Link to="/contact" className="nav-link">
          <Button variant="outline-info" className="header-button">
            Contact
          </Button>
        </Link>
      </Nav>
    </Navbar>
    // The JSX code for the Header component's UI ends here
  );
};

// Export the Header component to make it available for rendering
export default Header;
