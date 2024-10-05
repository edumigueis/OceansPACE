import React from 'react';
import MissionCards from '../MissionCards';

function MapFocusStage({ handleCenterMap }) {
  const centerMap = () => {
    handleCenterMap(24.0, 62.0); // Example coordinates for centering
  };

  return (
    <div style={{ width: '700px', backgroundColor: '#f0f0f0' }}>
      <MissionCards>
        <div className="mission-card-content">
          <div className="mission-card-header">
            <h2>Mission 3</h2>
            <h4>Complete Your Goals</h4>
          </div>
          <ul>
            <li>Finalize report G</li>
            <li>Prepare presentation H</li>
            <li>Gather feedback I</li>
          </ul>
          <p>This is some rich text for mission 3.</p>
          <button onClick={centerMap}>Focus on Coordinates</button> {/* Add a button to center the map */}
        </div>
      </MissionCards>
    </div>
  );
}

export default MapFocusStage;
