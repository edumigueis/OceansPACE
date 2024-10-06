import React from 'react';
import MissionCards from '../MissionCards';
import '../../styles/MissionCards.css';

function InformativeSectionStage({ focusOnCoordinates, latitude, longitude, zoomLevel, children }) {
  const centerMap = () => {
    focusOnCoordinates(latitude, longitude, zoomLevel);
  };

  return (
    <div className="informative-section">
      <MissionCards>
        <div className="mission-card-content">
          {children}
          <button className="focus-button" onClick={centerMap}>
            Focus on Coordinates
          </button>
        </div>
      </MissionCards>
    </div>
  );
}

export default InformativeSectionStage;
