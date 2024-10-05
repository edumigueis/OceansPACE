import React from 'react';
import MissionCards from '../MissionCards';

function InformativeSectionStage({ handleCenterMap }) {
  const centerMap = () => {
    handleCenterMap(23.0, 61.0); // Example coordinates for centering
  };

  return (
    <div style={{ width: '700px', backgroundColor: '#f0f0f0' }}>
      <MissionCards>
        <div className="mission-card-content">
          <div className="mission-card-header">
            <h2>Mission 2</h2>
            <h4>Explore New Areas</h4>
          </div>
          <ul>
            <li>Discover point D</li>
            <li>Analyze point E</li>
            <li>Summarize point F</li>
          </ul>
          <p>This is some rich text for mission 2.</p>
          <button onClick={centerMap}>Focus on Coordinates</button> {/* Add a button to center the map */}
        </div>
      </MissionCards>
    </div>
  );
}

export default InformativeSectionStage;
