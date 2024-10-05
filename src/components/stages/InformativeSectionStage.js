import React from 'react';
import MissionCards from '../MissionCards';

function InformativeSectionStage({ focusOnCoordinates, latitude, longitude, zoomLevel, children }) {
  const centerMap = () => {
    focusOnCoordinates(latitude, longitude, zoomLevel); // Usando a nova função com coordenadas e nível de zoom
  };

  return (
    <div style={{ width: '500px', backgroundColor: '#f0f0f0' }}>
      <MissionCards>
        <div className="mission-card-content">
          {children}
          <button onClick={centerMap}>Focus on Coordinates</button> {/* Botão para centralizar o mapa */}
        </div>
      </MissionCards>
    </div>
  );
}

export default InformativeSectionStage;
