import React from 'react';
import './ContactButton.css';

const ContactButton = ({ contactInfo }) => {
  if (!contactInfo) {
    return null;
  }

  return (
    <div className="contact-button">
      <button onClick={() => alert(`Contact: ${contactInfo}`)}>Request More Info</button>
    </div>
  );
};

export default ContactButton;
