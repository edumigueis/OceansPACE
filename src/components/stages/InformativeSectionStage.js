import React from 'react';
import MissionCards from '../MissionCards';
import '../../styles/MissionCards.css';

function InformativeSectionStage({latitude, longitude, zoomLevel, children }) {
  return (
    <div className="informative-section">
        <div className="mission-card-content">
          {children}
        </div>
    </div>
  );
}

export default InformativeSectionStage;
