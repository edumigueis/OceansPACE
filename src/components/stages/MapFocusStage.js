import React, { useState } from 'react';
import { useMap } from './MapProvider';
import MissionCards from '../MissionCards';
import '../../styles/MapFocusStage.css';

function MapFocusStage({ images, setStageIndex, nextStage }) {
  const { focusOnCoordinates } = useMap();
  const [visibleMissions, setVisibleMissions] = useState([images[0]]);
  const [readMissions, setReadMissions] = useState([]); // Rastreia missões lidas

  // Função para focar nas coordenadas da missão
  const focusOnCoordinatesNow = (mission) => {
    if (focusOnCoordinates) {
      focusOnCoordinates(mission.lat, mission.lng, mission.zoom);
    }
  };

  // Função para adicionar mais missões à lista de missões visíveis
  const addMoreMissions = () => {
    const nextMission = images[visibleMissions.length];
    if (nextMission) {
      setReadMissions([...readMissions, visibleMissions[visibleMissions.length - 1]]); // Marca a missão anterior como lida
      setVisibleMissions([...visibleMissions, nextMission]);
    }
  };

  // Função para avançar para o próximo estágio
  const handleNextStage = () => {
    setStageIndex(nextStage);
  };

  return (
    <div className="map-focus-stage">
      <div className="mission-cards-container">
        {visibleMissions.map((mission, index) => (
          <MissionCards key={index}>
            <div className={`mission-card-content ${readMissions.includes(mission) ? 'read' : ''}`}>
              <div className={`mission-card-header ${readMissions.includes(mission) ? 'read' : ''}`}>
                <h2>{mission.title}</h2>
                <img
                  src={mission.image}
                  alt={`Mission ${index + 1}`}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <p>{mission.text}</p>
              </div>
              <button onClick={() => focusOnCoordinatesNow(mission)}>Focus on Coordinates</button>
              {index === visibleMissions.length - 1 && visibleMissions.length < images.length && (
                <button onClick={addMoreMissions}>More</button>
              )}
              {index === visibleMissions.length - 1 && (
                <button onClick={() => handleNextStage(mission.next)}>Next</button> // Botão para ir ao próximo estágio
              )}
            </div>
          </MissionCards>
        ))}
      </div>
    </div>
  );
}

export default MapFocusStage;
