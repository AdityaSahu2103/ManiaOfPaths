import React from 'react';
import './timeline.css'; // Assuming you have a CSS file

const Timeline = ({ steps }) => {
  // Add a check to ensure 'steps' is defined and not empty
  if (!steps || steps.length === 0) {
    return <p>No journey steps available for this project.</p>;
  }

  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div key={index} className="timeline-step">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
