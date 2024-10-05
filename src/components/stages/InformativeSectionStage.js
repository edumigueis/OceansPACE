import React from 'react';
import MissionCards from '../MissionCards';

function InformativeSectionStage({ handleCenterMap, children }) {
  const centerMap = () => {
    handleCenterMap(35.0, 61.0); // Exemplo de coordenadas para centralizar
  };

  return (
    <div style={{ width: '500px', backgroundColor: '#f0f0f0' }}>
      <MissionCards>
        <div className="mission-card-content">
          {children} { }
          <button onClick={centerMap}>Focus on Coordinates</button> {/* Botão para centralizar o mapa */}
        </div>
      </MissionCards>
    </div>
  );
}

export default InformativeSectionStage;
