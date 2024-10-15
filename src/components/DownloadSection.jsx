// DownloadSection.jsx
import React from 'react';
import './DownloadSection.css'; // Make sure to import the CSS file

const DownloadSection = ({ downloadLink }) => {
  // Check if downloadLink is provided
  if (!downloadLink) {
    return (
      <div className="download-section">
        <h2>No download link available.</h2>
      </div>
    );
  }

  return (
    <div className="download-section">
      <h2>Check Project Report</h2>
      <div className="download-buttons">
        <a href={downloadLink} target="_blank" rel="noopener noreferrer">
          <button className="download-button">Click Here</button>
        </a>
      </div>
    </div>
  );
};

export default DownloadSection;
