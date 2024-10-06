import React, { useState } from 'react';
import { useMap } from './MapProvider';
import MissionCards from '../MissionCards';
import '../../styles/MapFocusStage.css';

function MapFocusStage({ images }) {
  const { focusOnCoordinates } = useMap();
  const [visibleMissions, setVisibleMissions] = useState([images[0]]);
  const [readMissions, setReadMissions] = useState([]); // Adicionando um estado para rastrear as missões lidas

  const focusOnCoordinatesNow = (coordinates) => {
    if (focusOnCoordinates) {
      focusOnCoordinates(coordinates.lat, coordinates.lng, coordinates.zoom); // Define o nível de zoom desejado
    }
  };

  const addMoreMissions = () => {
    const nextMission = images[visibleMissions.length];
    if (nextMission) {
      setReadMissions([...readMissions, visibleMissions[visibleMissions.length - 1]]); // Marca a missão anterior como lida
      setVisibleMissions([...visibleMissions, nextMission]);
    }
  };

  return (
    <div className="map-focus-stage">
      <div className="mission-cards-container">
        {visibleMissions.map((mission, index) => (
          <MissionCards key={index}>
            <div className={`mission-card-content ${readMissions.includes(mission) ? 'read' : ''}`}>
              <div className={`mission-card-header ${readMissions.includes(mission) ? 'read' : ''}`}>
                <h2>{mission.title}</h2>
                <img src={mission.image} alt={`Mission ${index + 1}`} />
                <p>{mission.text}</p>
              </div>
              <button onClick={() => focusOnCoordinatesNow(mission)}>Focus on Coordinates</button>
              {index === visibleMissions.length - 1 && visibleMissions.length < images.length && (
                <button onClick={addMoreMissions}>More</button>
              )}
            </div>
          </MissionCards>
        ))}
      </div>
      {/* Removendo a navegação anterior e próxima */}
      {/* <div className="mission-navigation">
        <button onClick={previousMission} disabled={visibleMissions.length <= 1}>
          Previous
        </button>
        <button onClick={addMoreMissions} disabled={visibleMissions.length >= images.length}>
          Next
        </button>
      </div> */}
    </div>
  );
}

export default MapFocusStage;
