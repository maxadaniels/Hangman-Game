import React, { useState } from 'react';

// Define a functional component named "Contact"
const Contact = () => {
  // State hooks to manage the 'name' and 'message' inputs' values
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder code: Handle sending the message here
    console.log('Name:', name);
    console.log('Message:', message);
  };

  return (
    // The JSX code for the component's UI starts here
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
    // The JSX code for the component's UI ends here
  );
};

// Export the Contact component to make it available for other modules
export default Contact;

